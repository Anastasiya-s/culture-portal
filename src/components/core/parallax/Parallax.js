import React from 'react';

import './parallax.scss';

const Parallax = () => {
  const parallax = (event) => {
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`;
    });
  }
  document.addEventListener('mousemove', parallax);

  return (
    <>
      <div className="scene">
        <div data-speed="10" className="layer layer-bg" />
        <div data-speed="40" className="layer layer-1" />
      </div>
    </>
  )
}

export default Parallax;