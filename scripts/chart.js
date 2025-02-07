export function drawPieChart(ctx, data) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;

  data.forEach(item => {
      const sliceAngle = (item.value / totalValue) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.height / 2, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      const midAngle = startAngle + sliceAngle / 2;
      const labelX = ctx.canvas.width / 2 + (ctx.canvas.height / 2.5) * Math.cos(midAngle);
      const labelY = ctx.canvas.height / 2 + (ctx.canvas.height / 2.5) * Math.sin(midAngle);

      ctx.fillStyle = '#000';
      ctx.font = 'bolder 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;

      ctx.fillText(`${item.label}%: ${item.value}%`, labelX, labelY);

      ctx.shadowColor = 'transparent';

      startAngle += sliceAngle;
  });
}
export function updateChart(data) {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);

  const timeLeft = midnight - now;
  const totalDayTime = 24 * 60 * 60 * 1000;

  const successRate = (timeLeft / totalDayTime) * 100; 
  const failureRate = 100 - successRate;

  return data.map((item, index) => {
    if (index === 0) {
      return { ...item, value: Math.round(failureRate) };
    } else if (index === 1) {
      return { ...item, value: Math.round(successRate) };
    }
    return item;
  });
}

