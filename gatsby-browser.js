/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import Wrapper from "./src/layouts/Wrapper";
import React from 'react'

// You can delete this file if you're not using it
// Import the component at the top of the file

export const wrapPageElement = ({ element, props }) => (
  <Wrapper {...props}>{element}</Wrapper>
);