import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader speed={2} width={280} height={480} viewBox="0 0 280 480" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <circle cx="130" cy="136" r="126" />
    <rect x="-4" y="271" rx="10" ry="10" width="280" height="32" />
    <rect x="2" y="313" rx="10" ry="10" width="277" height="102" />
    <rect x="153" y="427" rx="24" ry="24" width="122" height="37" />
    <rect x="0" y="427" rx="10" ry="10" width="122" height="37" />
  </ContentLoader>
);

export default MyLoader;
