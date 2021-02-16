const SvgIcon = ({element: Element, children, ...otherProps}) => Element ? <Element {...otherProps}/> : null;

export default SvgIcon;