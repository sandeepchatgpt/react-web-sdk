import {
  Button,
  FluentProvider,
  webLightTheme,
} from '@fluentui/react-components';
import type { ButtonProps } from '@fluentui/react-components';
export const WzButton = (props: ButtonProps) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button {...props}>{props.children}</Button>
    </FluentProvider>
  );
};
