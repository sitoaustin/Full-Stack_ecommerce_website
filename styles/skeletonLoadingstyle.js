import styled from "styled-components";

export const SkeletonLoadingStyle = styled.div`
  background-color: white;
  /* background-color: blue; */
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  .skeletonDIv {
    min-height: 20rem;
    margin-bottom: 0.5rem;
  }
  .skeletonInnerDiv {
    width: 100%;
    height: 100%;
  }
  .textDiv {
    height: 1.5rem;
    margin-bottom: 1rem;
    width: 10rem;
  }
  .skeletonInnerDiv,
  .textDiv {
    animation: skeletonloading 1s linear infinite alternate;
  }

  @keyframes skeletonloading {
    0% {
      background-color: hsl(200, 20%, 80%);
      background-color: #edf0f2;
    }
    100% {
      background-color: hsl(200, 20%, 95%);
      background-color: #edf0f2;
    }
  }

  h2 {
    padding: 0.5rem 0rem;
  }
`;
