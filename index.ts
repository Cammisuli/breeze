import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';

const colorSet: IColorSet = {
    base: {
        foreground: '#ffffff',
        background: '#333333',
        color1: '#58a8fd',
        color2: '#ffcb5b',
        color3: '#40a893',
        color4: '#ffeead'
    },
    overrides: {}
};

generateTheme(
    themeName,
    colorSet,
    path.join(__dirname, 'themes', 'generated.json')
);
