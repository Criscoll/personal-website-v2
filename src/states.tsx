// ### This file contains all of the global states that are managed
// ### by the recoil state management library

import { atom } from 'recoil';


export const introComplete = atom({
    key: "introComplete",
    default: false,
});