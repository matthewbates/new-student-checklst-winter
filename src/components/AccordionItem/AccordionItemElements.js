// import styled from "styled-components";

// export const AccordionItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   width: 100%;
//   max-width: 700px;
//   overflow: hidden;
// `;

// export const AccordionItemBtn = styled.button`
//   display: flex;
//   align-items: center;
//   background: ${({ $index, $activeIndex }) =>
//     $index === $activeIndex ? "#a89968" : "#721c28"};
//   color: #ffffff;
//   padding: 1em;
//   font-size: 1em;
//   gap: 0.5em;
//   font-weight: bold;
//   cursor: pointer;
//   border: none;
//   border-bottom: ${({ $index, $activeIndex }) =>
//     $index === $activeIndex ? "none" : "1px solid #f1f2f2"};
//   transition: 0.3s ease-in-out;
// `;

// export const AccordionItemContentWrapper = styled.div`
//   height: ${({ $contentRef, $index, $activeIndex }) =>
//     $contentRef && $index === $activeIndex
//       ? `${$contentRef.current.scrollHeight}px`
//       : "0px"};
//   transition: 0.3s ease;
// `;

// export const AccordionItemContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0 1em;
//   gap: 0.25em;
//   border: 1px solid #f1f2f2;

//   div {
//     &:first-child {
//       padding-top: 1.5em;
//     }
//     &:last-child {
//       padding-bottom: 1.5em;
//     }
//   }
// `;

// export const AccordionItemA = styled.a`
//   text-decoration: none;
//   color: #721c28;
//   font-weight: bold;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  /* margin-bottom: 0.5em; */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const AccordionItemBtn = styled.button`
  display: flex;
  align-items: center;
  background: ${({ $index, $activeIndex }) =>
    $index === $activeIndex
      ? "linear-gradient(135deg, #a89968 0%, #c9b87e 100%)"
      : "linear-gradient(135deg, #721c28 0%, #8a2332 100%)"};
  color: #ffffff;
  padding: 1.25em 1.5em;
  font-size: 1em;
  /* gap: 0.5em; */
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-bottom: ${({ $index, $activeIndex }) =>
    $index === $activeIndex ? "none" : "1px solid rgba(241, 242, 242, 0.2)"};
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    /* transform: translateY(-2px); */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ $index, $activeIndex }) =>
      $index === $activeIndex ? "rotate(90deg)" : "rotate(0deg)"};
  }
`;

export const AccordionItemContentWrapper = styled.div`
  height: ${({ $contentRef, $index, $activeIndex }) =>
    $contentRef && $index === $activeIndex
      ? `${$contentRef.current.scrollHeight}px`
      : "0px"};
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5em;
  /* gap: 0.5em; */
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
  border-left: 3px solid #a89968;
  border-right: 1px solid #f1f2f2;
  border-bottom: 1px solid #f1f2f2;

  div {
    line-height: 1.6;

    &:first-child {
      padding-top: 1.5em;
      animation: fadeInDown 0.4s ease;
    }
    &:last-child {
      padding-bottom: 1.5em;
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const AccordionItemA = styled.a`
  text-decoration: none;
  color: #721c28;
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #721c28, #a89968);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #a89968;

    &::after {
      width: 100%;
    }
  }
`;
