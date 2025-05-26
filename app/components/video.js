export function Video(props) {
  const { src, ...styles } = props;
  return (
    <video controls style={styles}>
      <source src={src} type="video/mp4"></source>
    </video>
  );
}
