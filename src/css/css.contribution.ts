/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { registerLanguage } from '../_.contribution';

// Allow for running under nodejs/requirejs in tests
const _monaco: typeof monaco = (typeof monaco === 'undefined' ? (<any>self).monaco : monaco);

registerLanguage({
	id: 'css',
	extensions: ['.css'],
	aliases: ['CSS', 'css'],
	mimetypes: ['text/css'],
	loader: () => _monaco.Promise.wrap(import('./css'))
});
