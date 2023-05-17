import { StyledContainer } from './styles';

type Props = {
  currentTime: Date;
};

const StopWatch = ({ currentTime }: Props) => {
  return (
    <StyledContainer>
      <>{currentTime}</>
    </StyledContainer>
  );
};

export default StopWatch;
