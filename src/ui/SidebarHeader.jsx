import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import styled from "styled-components";

import Logo from "./Logo";

const StyledHeader = styled.header`
  position: relative;
  margin-bottom: 3.2rem;
  min-height: 9.6rem;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  border: none;
  background-color: var(--color-brand-600);
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: 0.2s;

  &:hover {
    background-color: var(--color-brand-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-brand-50);
  }
`;

export default function SidebarHeader({ isCollapsed, setIsCollapsed }) {
  return (
    <StyledHeader>
      <StyledButton
        title={isCollapsed ? "Expand Menu" : "Collapse Menu"}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
      </StyledButton>

      <Logo />
    </StyledHeader>
  );
}
