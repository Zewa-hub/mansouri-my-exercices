export const my_is_posi_neg =  (nbr)  => {
	if ( nbr === null  || typeof nbr == "undefined" || nbr > 0)
	{
		return "POSITIF"
	}
	else if (nbr < 0)
	{
		return "NEGATIF";
	}
	else
	{
		return "NEUTRAL"
	}
}	