import { Container } from "./styles";

export function ButtonText({ title, $isactive = false, ...rest }) {
  return (
    <Container {...rest} type="button" $isactive={$isactive.toString()}>
      {title}
    </Container>
  );
}
