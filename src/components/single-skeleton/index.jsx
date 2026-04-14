import ContentLoader from "react-content-loader";

const MyLoaderSingle = (props) => (
  <ContentLoader speed={2} width={1260} height={780} viewBox="0 0 1260 480" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <circle cx="125" cy="245" r="126" />
    <rect x="297" y="136" rx="10" ry="10" width="280" height="32" />
    <rect x="298" y="192" rx="10" ry="10" width="277" height="102" />
    <rect x="451" y="300" rx="24" ry="24" width="122" height="37" />
    <rect x="298" y="300" rx="10" ry="10" width="122" height="37" />
    <rect x="139" y="30" rx="0" ry="0" width="286" height="47" />
    <rect x="52" y="447" rx="0" ry="0" width="199" height="58" />
  </ContentLoader>
);

export default MyLoaderSingle;
