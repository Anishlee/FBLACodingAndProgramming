import React from 'react'
import './style.css';
function OtherPage() {
    return (
        <div>
    <div class="article">
      <div class="hero">
        <h1>Sticky Sidebar</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iure repudiandae fugiat iusto? Distinctio nostrum ex reprehenderit doloremque suscipit quos.</p>
        <button>Action</button>
      </div>
      <div class="grid">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
        <div class="box">Box 6</div>
      </div>
    </div>
    <aside class="sticky">Sidebar</aside>
  </div>
    )
}

export default OtherPage;