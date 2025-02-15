/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let ReactDOM: typeof import('react-dom') | typeof import('react-dom/client');
if (process.env.HAS_REACT_DOM_CLIENT) {
  ReactDOM = require('react-dom/client');
} else {
  ReactDOM = require('react-dom');
}

/** @internal */
export function renderReactElement(element: JSX.Element, root: HTMLElement) {
  if ('createRoot' in ReactDOM) {
    ReactDOM.createRoot(root).render(element);
  } else {
    ReactDOM.render(element, root);
  }
}
