import { useEffect } from "react";
    import { withRouter } from "react-router-dom";

    const ScrollToTop = ({ children, location: { pathname } }) => {
      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto" // smooth option
        });
      }, [pathname]);

      return children || null;
    };

    export default withRouter(ScrollToTop);
