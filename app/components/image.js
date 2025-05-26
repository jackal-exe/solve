export function Image(props) {
  const { src, alt, ...styles } = props;
  return <img src={src} alt={alt} style={styles} />;
}
