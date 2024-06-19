declare module 'jwtauthwrapper' {
  import { ReactNode } from 'react';

  interface JWTAuthWrapperProps {
    appType: string;
    children: ReactNode;
  }

  export function logout_user(): void;

  const JWTAuthWrapper: (props: JWTAuthWrapperProps) => JSX.Element;
  export default JWTAuthWrapper;
}
