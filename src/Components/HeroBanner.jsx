import styled from "styled-components";
import Hero from "./Assets/nice.avif";
//import Hero1 from "../assets/images/min.jpg";

const HeroBanner = () => {
  return (
    <Section>
      <div className="overlay">
        <div className="container">
          <div className="design"></div>
          <div className="content">
            <h1 className="title">
             Bringing Organic Goodness Home.
            </h1>
            <p style={{ color: "#fff" }}>
              Order<span style={{ color: "#19C048" }}>Anywhere</span> at <span style={{ color: "#19C048" }}>anytime</span>
            </p>
            <p className="description">
              .
            </p>
            
          </div>

        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background-color: #191f2a;
  padding-bottom: 8rem;
  background-image: linear-gradient(rgba(20, 27, 41, 0.5), rgba(20, 27, 41, 0.7)), url(${Hero});

  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    padding: 2rem 3rem;
     display: flex;
    justify-content: center;
    align-items: center;
    .design {
      height: 30rem;
      width: 30rem;
      background-color: #fff;
      opacity: 0.1;
      border-radius: 100%;
      filter: blur(2000px);
      position: absolute;
      bottom: -20%;
      right: 0%;
      z-index: 1;
    }
    .content {
      margin-top: 2.5rem;
      width: 50%;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        color: #fff;
        font-size: 4rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      .description {
        font-size: 1.6rem;
        color: #a0a3a8;
      }
    }
    .image {
      display: none;
      width: 50%;
      img {
        box-shadow: rgba(25, 31, 42, 1) 0px 3px 6px,
          rgba(25, 31, 42, 1) 0px 3px 6px;
        width: 80%;
        /* border-radius: 9px; */
        height: max-content;
      }
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    background-image: ${`url(${Hero})`};
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
   
    height: max-content;
    .overlay {
      .container {
        .design {
          display: none;
        }
        .content {
          width: 100%;
          h1 {
            color: #fff;
            font-size: 2.8rem;
            margin-bottom: 1.5rem;
          }
          p {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .description {
            font-size: 1.4rem;
            color: #a0a3a8;
          }
        }
        .image {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 520px) {
    background-image: ${`url(${Hero})`};
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    /* height: max-content; */
    padding-bottom: 0px;
    .overlay {
      background: rgba(50, 70, 80, 0.6);
      padding-bottom: 2.5rem;
      .container {
        flex-direction: column;
        padding: 2rem 1.5rem;
        .design {
          display: none;
        }
        .content {
          width: 100%;
          order: 1;
          margin-top: 2.5rem;
          h1 {
            color: #fff;
            font-size: 2.7rem;
            margin-bottom: 1.5rem;
          }
          p {
            font-size: 1.6rem;
          }
          .description {
            font-size: 1.4rem;
            color: #a0a3a8;
          }
        }
        .image {
          display: none;
        }
      }
    }
  }
`;

export default HeroBanner;