char_mapper = {
	'A':'А', 'B':'Б', 'V':'В', 'G':'Г', 'D':'Д', '\\':'Ѓ', 'E':'Е', '@':'Ж', 'Z':'З', 'Y':'Ѕ', 'I':'И', 'J':'Ј', 'K':'К', 'L':'Л', 'Q':'Љ', 'M':'М',
	'N':'Н', 'W':'Њ', 'O':'О', 'P':'П', 'R':'Р', 'S':'С', 'T':'Т', ']':'Ќ', 'U':'У', 'F':'Ф', 'H':'Х', 'C':'Ц', '^':'Ч', 'X':'Џ', '[':'Ш',
	'a':'а', 'b':'б', 'v':'в', 'g':'г', 'd':'д', '|':'ѓ', 'e':'е', '@':'Ж', 'z':'з', 'y':'ѕ', 'i':'и', 'j':'ј', 'k':'к', 'l':'л', 'q':'љ', 'm':'м',
	'n':'н', 'w':'њ', 'o':'о', 'p':'п', 'r':'р', 's':'с', 't':'т', '}':'ќ', 'u':'у', 'f':'ф', 'h':'х', 'c':'ц', '~':'ч', 'x':'џ', '{':'ш', '×':'x'
}

function get_map(x):
	if (x in char_mapper) {
		return char_mapper[x]
	}
	else {
		return x
	}


