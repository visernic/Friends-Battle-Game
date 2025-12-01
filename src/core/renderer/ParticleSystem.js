/**
 * Particle Effects Engine
 * Handles sparks, coins, and visual FX.
 */

export class ParticleSystem {
    static spawnSparks(x, y, particlesArray) {
        for(let i=0; i<15; i++) {
            particlesArray.push({
                x: x, 
                y: y, 
                vx: (Math.random() - 0.5) * 20, 
                vy: (Math.random() - 0.5) * 20,
                life: 1.0, 
                color: Math.random() > 0.5 ? '#fff' : '#ffff00'
            });
        }
    }

    static updateAndDraw(ctx, particlesArray) {
        ctx.globalCompositeOperation = 'lighter';
        for(let i = particlesArray.length - 1; i >= 0; i--) {
            let p = particlesArray[i];
            
            // Physics
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;

            // Render
            if(p.life <= 0) {
                particlesArray.splice(i, 1);
            } else {
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1.0;
    }
}
