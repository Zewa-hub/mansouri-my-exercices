export const my_size_alpha =  (str)  => {
	if (typeof str != "string")
	{
		return 0;
	}
	let i = 0;
	while (str[i])
	{
		i++;
	}
	return i;
}	