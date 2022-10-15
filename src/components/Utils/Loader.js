import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeCircles
        height="200"
        width="200"
        color="#4fa94d"
        wrapperStyle={{
          alignItems: clearInterval,
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </>
  );
};
