declare module "rodal" {
  export interface RodalProps {
    width?: number;
    height?: number;
    measure?: string;
    visible?: boolean;
    onClose: () => void;
    onAnimationEnd?: () => void;
    showMask?: boolean;
    closeOnEsc?: boolean;
    closeMaskOnClick?: boolean;
    showCloseButton?: boolean;
    animation?:
      | "zoom"
      | "fade"
      | "flip"
      | "door"
      | "rotate"
      | "slideUp"
      | "slideDown"
      | "slideLeft"
      | "slideRight";
    enterAnimation?: string;
    leaveAnimation?: string;
    duration?: number;
    className?: string;
    customStyles?: React.CSSProperties;
    customMaskStyles?: React.CSSProperties;
  }

  const Rodal: React.FC<RodalProps>;
  export default Rodal;
}
