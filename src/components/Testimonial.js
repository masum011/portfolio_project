import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Masum"}
          feedback={"Your Teaching skills Good"}
        />

        <TestimonialCard
          name={"Ramzi"}
          feedback={
            "The Ramzi theory suggests that the gender of a fetus can be seen as early"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;