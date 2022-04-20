export const my_array_alpha =  (str)  => {
	if (typeof str != "string")
	{
		return [];
	}
	let i = 0;
	let result = [];
	while (str[i])
	{
		result[i]=str[i]
		i++;
	}
	return result;
}