import React from "react";

import { isBrowser } from "../utils/layout";

export type SSRState = {
  isBrowser: boolean;
  isServer: boolean;
};

const useSSR = (): SSRState => {
  const [browser, setBrowser] = React.useState<boolean>(false);
  React.useEffect(() => {
    setBrowser(isBrowser());
  }, []);

  return {
    isBrowser: browser,
    isServer: !browser,
  };
};

export default useSSR;