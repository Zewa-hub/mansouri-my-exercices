export const my_length_array = (arr)  => {
	let i = 0;
	let result = [];
	while (arr[i])
	{
		i++;
	}
	return i;
}
console.log(my_length_array([]))