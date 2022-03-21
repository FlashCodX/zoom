import { useState } from "react";

export const Card = () => {
  const [play, updatePlay] = useState(false);

  const embedId = "dQw4w9WgXcQ";
  return (
    <article className="card">
      <div className="switcher">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        <div className={`card_thumbnail ${play ? "hide" : ""}`}>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <button onClick={() => updatePlay(true)}>
            <i className="fa-solid fa-circle-play"></i>
          </button>
        </div>
      </div>
      <section className="card_s_1">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>4 days ago</p>
      </section>

      <section className="card_info">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          enim reprehenderit explicabo eos assumenda est ipsum. Eaque ratione
          officiis accusamus velit aliquid quas? Eum ipsa delectus sequi,
          recusandae deserunt nemo.
        </p>
      </section>

      <div className="divider" />
      <section className="cards_actions_wrapper">
        <div>
          <p>10</p>
          <i className="fa-solid fa-heart"></i>
          <p>Like</p>
        </div>
        <div>
          <i className="fa-solid fa-comment"></i>
          <p>Comment</p>
        </div>
        <div>
          <i className="fa-solid fa-play"></i>
          <p>Share</p>
        </div>
      </section>
    </article>
  );
};
