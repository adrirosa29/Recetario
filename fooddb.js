// Tabla nutricional local — kcal por 100g (sólidos) o 100ml (líquidos)
// Valores de referencia aproximados basados en tablas nutricionales estándar (USDA/BEDCA)
// alias permite que coincidan variantes de escritura/género en español
const FOOD_DB = [
  // --- Cereales, pasta, legumbres ---
  { nombre:"Arroz blanco crudo", kcal100:130, alias:["arroz","arroz blanco"] },
  { nombre:"Arroz integral crudo", kcal100:111, alias:["arroz integral"] },
  { nombre:"Pasta cocida", kcal100:158, alias:["pasta","macarrones","espaguetis","espagueti","fideos"] },
  { nombre:"Pasta cruda", kcal100:371, alias:["pasta cruda"] },
  { nombre:"Pan blanco", kcal100:265, alias:["pan","pan de molde","barra de pan"] },
  { nombre:"Pan integral", kcal100:247, alias:["pan integral"] },
  { nombre:"Harina de trigo", kcal100:364, alias:["harina","harina de trigo"] },
  { nombre:"Avena", kcal100:389, alias:["avena","copos de avena"] },
  { nombre:"Quinoa cocida", kcal100:120, alias:["quinoa"] },
  { nombre:"Lentejas cocidas", kcal100:116, alias:["lentejas"] },
  { nombre:"Garbanzos cocidos", kcal100:164, alias:["garbanzos","garbanzo"] },
  { nombre:"Alubias cocidas", kcal100:127, alias:["alubias","judías blancas","frijoles","habichuelas"] },
  { nombre:"Maíz cocido", kcal100:96, alias:["maíz","maiz","elote"] },
  { nombre:"Cuscús cocido", kcal100:112, alias:["cuscus","cuscús"] },

  // --- Carnes ---
  { nombre:"Pollo (pechuga, crudo)", kcal100:165, alias:["pollo","pechuga de pollo","filete de pollo"] },
  { nombre:"Pollo (muslo, crudo)", kcal100:209, alias:["muslo de pollo","contramuslo"] },
  { nombre:"Ternera magra", kcal100:172, alias:["ternera","filete de ternera","carne de ternera"] },
  { nombre:"Carne picada de ternera", kcal100:215, alias:["carne picada","carne molida"] },
  { nombre:"Cerdo (lomo)", kcal100:242, alias:["cerdo","lomo de cerdo","carne de cerdo"] },
  { nombre:"Jamón cocido", kcal100:107, alias:["jamón cocido","jamon cocido","jamón york"] },
  { nombre:"Jamón serrano", kcal100:241, alias:["jamón serrano","jamon serrano"] },
  { nombre:"Chorizo", kcal100:455, alias:["chorizo"] },
  { nombre:"Bacon / panceta", kcal100:541, alias:["bacon","panceta","tocino"] },
  { nombre:"Salchichas", kcal100:300, alias:["salchicha","salchichas"] },
  { nombre:"Cordero", kcal100:294, alias:["cordero","carne de cordero"] },
  { nombre:"Pavo (pechuga)", kcal100:135, alias:["pavo","pechuga de pavo"] },
  { nombre:"Conejo", kcal100:173, alias:["conejo"] },

  // --- Pescados y mariscos ---
  { nombre:"Merluza", kcal100:90, alias:["merluza"] },
  { nombre:"Salmón", kcal100:208, alias:["salmón","salmon"] },
  { nombre:"Atún fresco", kcal100:144, alias:["atún","atun","atún fresco"] },
  { nombre:"Atún en lata (al natural)", kcal100:116, alias:["atún en lata","atun en lata","atún de lata"] },
  { nombre:"Bacalao", kcal100:82, alias:["bacalao"] },
  { nombre:"Gambas / langostinos", kcal100:99, alias:["gambas","langostinos","camarones"] },
  { nombre:"Calamar", kcal100:92, alias:["calamar","calamares"] },
  { nombre:"Mejillones", kcal100:86, alias:["mejillones"] },
  { nombre:"Sardinas", kcal100:208, alias:["sardinas"] },
  { nombre:"Pulpo", kcal100:82, alias:["pulpo"] },

  // --- Huevos y lácteos ---
  { nombre:"Huevo entero", kcal100:155, alias:["huevo","huevos","huevo entero"] },
  { nombre:"Clara de huevo", kcal100:52, alias:["clara de huevo","claras"] },
  { nombre:"Leche entera", kcal100:64, alias:["leche","leche entera"] },
  { nombre:"Leche desnatada", kcal100:35, alias:["leche desnatada","leche descremada"] },
  { nombre:"Yogur natural", kcal100:61, alias:["yogur","yogur natural"] },
  { nombre:"Yogur griego", kcal100:97, alias:["yogur griego"] },
  { nombre:"Queso fresco", kcal100:98, alias:["queso fresco"] },
  { nombre:"Queso curado", kcal100:392, alias:["queso curado","queso manchego"] },
  { nombre:"Queso mozzarella", kcal100:280, alias:["mozzarella","queso mozzarella"] },
  { nombre:"Queso parmesano", kcal100:392, alias:["parmesano","queso parmesano"] },
  { nombre:"Nata / crema de leche", kcal100:340, alias:["nata","crema de leche"] },
  { nombre:"Mantequilla", kcal100:717, alias:["mantequilla"] },
  { nombre:"Requesón", kcal100:98, alias:["requesón","requeson"] },

  // --- Verduras y hortalizas ---
  { nombre:"Tomate", kcal100:18, alias:["tomate","tomates"] },
  { nombre:"Patata cruda", kcal100:77, alias:["patata","patatas","papa","papas"] },
  { nombre:"Cebolla", kcal100:40, alias:["cebolla","cebollas"] },
  { nombre:"Ajo", kcal100:149, alias:["ajo","ajos","diente de ajo"] },
  { nombre:"Zanahoria", kcal100:41, alias:["zanahoria","zanahorias"] },
  { nombre:"Pimiento", kcal100:31, alias:["pimiento","pimientos","pimiento rojo","pimiento verde"] },
  { nombre:"Calabacín", kcal100:17, alias:["calabacín","calabacin"] },
  { nombre:"Berenjena", kcal100:25, alias:["berenjena"] },
  { nombre:"Lechuga", kcal100:15, alias:["lechuga"] },
  { nombre:"Espinacas", kcal100:23, alias:["espinacas"] },
  { nombre:"Brócoli", kcal100:34, alias:["brócoli","brocoli"] },
  { nombre:"Coliflor", kcal100:25, alias:["coliflor"] },
  { nombre:"Champiñones", kcal100:22, alias:["champiñones","champiñon","setas"] },
  { nombre:"Pepino", kcal100:15, alias:["pepino"] },
  { nombre:"Judías verdes", kcal100:31, alias:["judías verdes","judias verdes","ejotes"] },
  { nombre:"Guisantes", kcal100:81, alias:["guisantes"] },
  { nombre:"Apio", kcal100:16, alias:["apio"] },
  { nombre:"Puerro", kcal100:61, alias:["puerro","puerros"] },
  { nombre:"Col / repollo", kcal100:25, alias:["col","repollo"] },
  { nombre:"Calabaza", kcal100:26, alias:["calabaza"] },
  { nombre:"Remolacha", kcal100:43, alias:["remolacha"] },

  // --- Frutas ---
  { nombre:"Manzana", kcal100:52, alias:["manzana","manzanas"] },
  { nombre:"Plátano / banana", kcal100:89, alias:["plátano","platano","banana","plátanos"] },
  { nombre:"Naranja", kcal100:47, alias:["naranja","naranjas"] },
  { nombre:"Limón", kcal100:29, alias:["limón","limon"] },
  { nombre:"Pera", kcal100:57, alias:["pera","peras"] },
  { nombre:"Fresas", kcal100:32, alias:["fresa","fresas"] },
  { nombre:"Uvas", kcal100:69, alias:["uva","uvas"] },
  { nombre:"Sandía", kcal100:30, alias:["sandía","sandia"] },
  { nombre:"Melón", kcal100:34, alias:["melón","melon"] },
  { nombre:"Piña", kcal100:50, alias:["piña","ananá"] },
  { nombre:"Mango", kcal100:60, alias:["mango"] },
  { nombre:"Aguacate", kcal100:160, alias:["aguacate","palta"] },
  { nombre:"Kiwi", kcal100:61, alias:["kiwi"] },
  { nombre:"Melocotón", kcal100:39, alias:["melocotón","melocoton","durazno"] },

  // --- Frutos secos y semillas ---
  { nombre:"Almendras", kcal100:579, alias:["almendras","almendra"] },
  { nombre:"Nueces", kcal100:654, alias:["nueces","nuez"] },
  { nombre:"Avellanas", kcal100:628, alias:["avellanas"] },
  { nombre:"Cacahuetes / maní", kcal100:567, alias:["cacahuetes","cacahuete","maní","mani"] },
  { nombre:"Pistachos", kcal100:560, alias:["pistachos"] },
  { nombre:"Semillas de chía", kcal100:486, alias:["chía","chia","semillas de chía"] },
  { nombre:"Semillas de sésamo", kcal100:573, alias:["sésamo","sesamo"] },

  // --- Aceites y grasas ---
  { nombre:"Aceite de oliva", kcal100:884, alias:["aceite de oliva","aceite"] },
  { nombre:"Aceite de girasol", kcal100:884, alias:["aceite de girasol"] },
  { nombre:"Margarina", kcal100:717, alias:["margarina"] },

  // --- Azúcares y endulzantes ---
  { nombre:"Azúcar blanco", kcal100:387, alias:["azúcar","azucar"] },
  { nombre:"Miel", kcal100:304, alias:["miel"] },
  { nombre:"Chocolate negro", kcal100:546, alias:["chocolate negro","chocolate"] },
  { nombre:"Chocolate con leche", kcal100:535, alias:["chocolate con leche"] },
  { nombre:"Cacao en polvo", kcal100:228, alias:["cacao","cacao en polvo"] },

  // --- Otros / condimentos ---
  { nombre:"Sal", kcal100:0, alias:["sal"] },
  { nombre:"Vinagre", kcal100:18, alias:["vinagre"] },
  { nombre:"Salsa de soja", kcal100:53, alias:["salsa de soja","soja"] },
  { nombre:"Mayonesa", kcal100:680, alias:["mayonesa"] },
  { nombre:"Ketchup", kcal100:101, alias:["ketchup","catsup"] },
  { nombre:"Mostaza", kcal100:66, alias:["mostaza"] },
  { nombre:"Caldo de pollo", kcal100:7, alias:["caldo de pollo","caldo"] },
  { nombre:"Tofu", kcal100:76, alias:["tofu"] },
  { nombre:"Aceitunas", kcal100:115, alias:["aceitunas","oliva"] },

  // --- Bebidas ---
  { nombre:"Vino tinto", kcal100:85, alias:["vino tinto","vino"] },
  { nombre:"Cerveza", kcal100:43, alias:["cerveza"] },
  { nombre:"Zumo de naranja", kcal100:45, alias:["zumo de naranja","jugo de naranja"] },
  { nombre:"Refresco de cola", kcal100:42, alias:["cola","refresco","coca-cola"] },
];

// Normaliza texto para comparación (sin acentos, minúsculas)
function normalize(str){
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .trim();
}

// Busca el mejor match en la tabla local. Devuelve {nombre, kcal100} o null.
function searchLocalFoodDB(query){
  if(!query || query.trim().length < 2) return null;
  const q = normalize(query);

  // 1. coincidencia exacta de alias
  for(const food of FOOD_DB){
    for(const alias of food.alias){
      if(normalize(alias) === q) return { nombre: food.nombre, kcal100: food.kcal100 };
    }
  }
  // 2. el alias contiene la query completa, o la query contiene el alias (substring)
  let best = null;
  let bestScore = -1;
  for(const food of FOOD_DB){
    for(const alias of food.alias){
      const a = normalize(alias);
      if(a.includes(q) || q.includes(a)){
        const score = Math.min(a.length, q.length) / Math.max(a.length, q.length);
        if(score > bestScore){
          bestScore = score;
          best = { nombre: food.nombre, kcal100: food.kcal100 };
        }
      }
    }
  }
  return best;
}
