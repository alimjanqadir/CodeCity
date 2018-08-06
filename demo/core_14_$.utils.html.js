/**
 * @license
 * Code City: HTML Utilities.
 *
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview HTML utilities for Code City.
 * @author fraser@google.com (Neil Fraser)
 */

$.utils.html = {}

$.utils.html.escape = function(text) {
  // Escape text so that it is safe to print as HTML.
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

$.utils.html.preserveWhitespace = function(text) {
  // Escape text so that it is safe and preserves whitespace formatting as HTML.
  // Runs of three spaces ('   ') need to be escaped twice ('_  ', '__ ').
  return $.utils.html.escape(text)
      .replace(/\t/g, '\u00A0 \u00A0 ')
      .replace(/  /g, '\u00A0 ').replace(/  /g, '\u00A0 ')  // Escape twice.
      .replace(/^ /gm, '\u00A0')
      .replace(/\n/g, '<br>');
};
