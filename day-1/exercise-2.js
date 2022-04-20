import { my_display_alpha } from "./exercise-1.js"
export const my_display_alpha_reverse =  ()  => {
    let alphabet = my_display_alpha();
	let reverse_alphabet = ""
    for (let i = 25; i >=0 ; i--)
    {
        reverse_alphabet += alphabet[i]
    }
    return reverse_alphabet
}