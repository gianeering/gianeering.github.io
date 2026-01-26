import React, { useState, useEffect, useRef } from "react";
import styles from "./EigenTitle.module.css";

const greekMap = {
  e: "ε",
  i: "ι",
  g: "γ",
  n: "ν",
  l: "λ",
  a: "α",
  b: "β",
};

export default function EigenTitle() {
  const title = "eigen.lab".split("");
  const [hovered, setHovered] = useState(null);
  const [animatedLetters, setAnimatedLetters] = useState(
    new Array(title.length).fill(false)
  );

  const containerRef = useRef(null);

  // IntersectionObserver per trigger animazione quando entra in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCascade();
        }
      },
      { threshold: 0.5 } // metà del titolo visibile
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Animazione a cascata
  const animateCascade = () => {
    setAnimatedLetters(new Array(title.length).fill(false));

    title.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedLetters((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });

        setTimeout(() => {
          setAnimatedLetters((prev) => {
            const newState = [...prev];
            newState[i] = false;
            return newState;
          });
        }, 400);
      }, i * 85);
    });
  };

  return (
    <>
      <div ref={containerRef} className={styles.title}>
        {title.map((char, i) => {
          const greekChar = greekMap[char.toLowerCase()];
          const isLambda = greekChar === "λ";

          const showGreek = hovered === i || animatedLetters[i];

          const letterContent = (
            <>
              <span
                className={`${styles.base} ${showGreek ? styles.fadeOut : ""}`}
              >
                {char}
              </span>
              {greekChar && (
                <span
                  className={`${styles.greek} ${showGreek ? styles.fadeIn : ""} ${
                    isLambda ? styles.lambdaGreek : ""
                  }`}
                >
                  {greekChar}
                </span>
              )}
            </>
          );

          return (
            <span
              key={i}
              className={`${styles.letter} ${isLambda ? styles.lambdaLetter : ""}`}
              onMouseEnter={() => char !== "." && setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {letterContent}
            </span>
          );
        })}
      </div>
    </>
  );
}
