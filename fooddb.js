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
  { nombre:"Huevo entero", kcal100:155, pesoUnidad:55, alias:["huevo","huevos","huevo entero"] },
  { nombre:"Clara de huevo", kcal100:52, pesoUnidad:33, alias:["clara de huevo","claras"] },
  { nombre:"Yema de huevo", kcal100:322, pesoUnidad:18, alias:["yema de huevo","yema"] },
  { nombre:"Leche entera", kcal100:64, alias:["leche","leche entera"] },
  { nombre:"Leche desnatada", kcal100:35, alias:["leche desnatada","leche descremada"] },
  { nombre:"Leche semidesnatada", kcal100:46, alias:["leche semidesnatada","leche semi"] },
  { nombre:"Leche de almendras", kcal100:24, alias:["leche de almendras"] },
  { nombre:"Leche de avena", kcal100:48, alias:["leche de avena"] },
  { nombre:"Leche de soja", kcal100:33, alias:["leche de soja","leche de soya"] },
  { nombre:"Yogur natural", kcal100:61, pesoUnidad:125, alias:["yogur","yogur natural"] },
  { nombre:"Yogur griego", kcal100:97, pesoUnidad:125, alias:["yogur griego"] },
  { nombre:"Yogur desnatado", kcal100:42, pesoUnidad:125, alias:["yogur desnatado","yogur 0%","yogur light"] },
  { nombre:"Yogur de sabores/frutas", kcal100:95, pesoUnidad:125, alias:["yogur de frutas","yogur de fresa","yogur de sabores"] },
  { nombre:"Queso fresco", kcal100:98, alias:["queso fresco"] },
  { nombre:"Queso curado", kcal100:392, alias:["queso curado","queso manchego"] },
  { nombre:"Queso mozzarella", kcal100:280, alias:["mozzarella","queso mozzarella"] },
  { nombre:"Queso parmesano", kcal100:392, alias:["parmesano","queso parmesano"] },
  { nombre:"Queso de cabra", kcal100:364, alias:["queso de cabra"] },
  { nombre:"Queso brie/camembert", kcal100:334, alias:["brie","camembert"] },
  { nombre:"Queso cottage", kcal100:98, alias:["queso cottage","cottage"] },
  { nombre:"Queso en lonchas", kcal100:330, alias:["queso en lonchas","queso de sándwich"] },
  { nombre:"Queso untable", kcal100:245, alias:["queso untable","philadelphia","queso de untar"] },
  { nombre:"Nata / crema de leche", kcal100:340, alias:["nata","crema de leche"] },
  { nombre:"Nata para cocinar", kcal100:200, alias:["nata para cocinar","nata ligera"] },
  { nombre:"Mantequilla", kcal100:717, alias:["mantequilla"] },
  { nombre:"Requesón", kcal100:98, alias:["requesón","requeson"] },
  { nombre:"Cuajada", kcal100:90, alias:["cuajada"] },
  { nombre:"Leche condensada", kcal100:321, alias:["leche condensada"] },
  { nombre:"Helado de vainilla", kcal100:207, alias:["helado","helado de vainilla"] },

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

  // --- Frutas (pesoUnidad = gramos orientativos de una pieza mediana, parte comestible) ---
  { nombre:"Manzana", kcal100:52, pesoUnidad:150, alias:["manzana","manzanas"] },
  { nombre:"Plátano / banana", kcal100:89, pesoUnidad:120, alias:["plátano","platano","banana","plátanos"] },
  { nombre:"Naranja", kcal100:47, pesoUnidad:130, alias:["naranja","naranjas"] },
  { nombre:"Limón", kcal100:29, pesoUnidad:60, alias:["limón","limon"] },
  { nombre:"Lima", kcal100:30, pesoUnidad:45, alias:["lima","limas"] },
  { nombre:"Pera", kcal100:57, pesoUnidad:160, alias:["pera","peras"] },
  { nombre:"Fresas", kcal100:32, alias:["fresa","fresas","fresón","fresones","frutilla","frutillas"] },
  { nombre:"Uvas", kcal100:69, alias:["uva","uvas"] },
  { nombre:"Sandía", kcal100:30, alias:["sandía","sandia"] },
  { nombre:"Melón", kcal100:34, alias:["melón","melon"] },
  { nombre:"Piña", kcal100:50, alias:["piña","ananá","ananas"] },
  { nombre:"Mango", kcal100:60, pesoUnidad:150, alias:["mango"] },
  { nombre:"Aguacate", kcal100:160, pesoUnidad:140, alias:["aguacate","palta"] },
  { nombre:"Kiwi", kcal100:61, pesoUnidad:70, alias:["kiwi"] },
  { nombre:"Melocotón", kcal100:39, pesoUnidad:140, alias:["melocotón","melocoton","durazno"] },
  { nombre:"Mandarina", kcal100:43, pesoUnidad:80, alias:["mandarina","mandarinas","clementina"] },
  { nombre:"Pomelo", kcal100:42, pesoUnidad:200, alias:["pomelo","toronja"] },
  { nombre:"Cerezas", kcal100:63, alias:["cereza","cerezas"] },
  { nombre:"Ciruela", kcal100:46, pesoUnidad:65, alias:["ciruela","ciruelas"] },
  { nombre:"Albaricoque", kcal100:48, pesoUnidad:40, alias:["albaricoque","albaricoques","damasco"] },
  { nombre:"Higo", kcal100:74, pesoUnidad:50, alias:["higo","higos"] },
  { nombre:"Granada", kcal100:68, pesoUnidad:200, alias:["granada"] },
  { nombre:"Papaya", kcal100:43, alias:["papaya"] },
  { nombre:"Coco (pulpa)", kcal100:354, alias:["coco"] },
  { nombre:"Arándanos", kcal100:57, alias:["arándanos","arandanos","blueberry"] },
  { nombre:"Frambuesas", kcal100:52, alias:["frambuesa","frambuesas"] },
  { nombre:"Moras", kcal100:43, alias:["mora","moras"] },
  { nombre:"Caqui", kcal100:70, pesoUnidad:170, alias:["caqui","kaki"] },
  { nombre:"Níspero", kcal100:47, pesoUnidad:25, alias:["níspero","nispero"] },
  { nombre:"Chirimoya", kcal100:75, pesoUnidad:300, alias:["chirimoya"] },
  { nombre:"Maracuyá", kcal100:97, pesoUnidad:50, alias:["maracuyá","maracuya","fruta de la pasión"] },
  { nombre:"Uva pasa", kcal100:299, alias:["uva pasa","pasas","uvas pasas"] },
  { nombre:"Dátil", kcal100:282, pesoUnidad:8, alias:["dátil","datil","dátiles"] },
  { nombre:"Nectarina", kcal100:44, pesoUnidad:140, alias:["nectarina","nectarinas"] },

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

  // --- Panadería y bollería ---
  { nombre:"Croissant", kcal100:406, alias:["croissant","cruasán","cruasan"] },
  { nombre:"Magdalena", kcal100:391, alias:["magdalena","magdalenas"] },
  { nombre:"Donut", kcal100:403, alias:["donut","dónut","rosquilla"] },
  { nombre:"Bizcocho", kcal100:350, alias:["bizcocho"] },
  { nombre:"Galletas tipo María", kcal100:430, alias:["galletas","galleta maría"] },
  { nombre:"Tostada de pan", kcal100:313, alias:["tostada","pan tostado"] },
  { nombre:"Cereales de desayuno", kcal100:378, alias:["cereales","cereales de desayuno"] },
  { nombre:"Tortilla de trigo (wrap)", kcal100:280, alias:["tortilla de trigo","wrap","tortita mexicana"] },
  { nombre:"Pizza (porción base)", kcal100:266, alias:["pizza"] },
  { nombre:"Empanada", kcal100:260, alias:["empanada","empanadilla"] },

  // --- Platos preparados y comida de restaurante (estimación orientativa) ---
  { nombre:"Calamares fritos / rebozados", kcal100:190, alias:["calamares fritos","calamares rebozados","rabas"] },
  { nombre:"Croquetas", kcal100:280, alias:["croquetas","croqueta"] },
  { nombre:"Tortilla de patatas", kcal100:200, alias:["tortilla de patatas","tortilla española"] },
  { nombre:"Patatas fritas", kcal100:312, alias:["patatas fritas","papas fritas"] },
  { nombre:"Paella", kcal100:172, alias:["paella"] },
  { nombre:"Hamburguesa (con pan)", kcal100:280, alias:["hamburguesa"] },
  { nombre:"Pizza margarita (porción restaurante)", kcal100:250, alias:["pizza margarita"] },
  { nombre:"Sushi (variado)", kcal100:150, alias:["sushi"] },
  { nombre:"Ensaladilla rusa", kcal100:195, alias:["ensaladilla rusa","ensaladilla"] },
  { nombre:"Lasaña", kcal100:165, alias:["lasaña","lasagna"] },
  { nombre:"Pollo frito (rebozado)", kcal100:246, alias:["pollo frito","pollo rebozado"] },
  { nombre:"Albóndigas en salsa", kcal100:195, alias:["albóndigas","albondigas"] },
  { nombre:"Gazpacho", kcal100:30, alias:["gazpacho"] },

  // --- Bebidas ---
  { nombre:"Vino tinto", kcal100:85, alias:["vino tinto","vino"] },
  { nombre:"Cerveza", kcal100:43, alias:["cerveza"] },
  { nombre:"Zumo de naranja", kcal100:45, alias:["zumo de naranja","jugo de naranja"] },
  { nombre:"Refresco de cola", kcal100:42, alias:["cola","refresco","coca-cola"] },
  { nombre:"Café solo", kcal100:1, alias:["café","cafe","café solo"] },
  { nombre:"Agua", kcal100:0, alias:["agua"] },
];

// Normaliza texto para comparación (sin acentos, minúsculas)
function normalize(str){
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .trim();
}

// Busca el mejor match en la tabla personal del usuario (alimentos guardados por él).
// alimentosPersonales: array de { clave, nombre, kcal100 }
function searchPersonalFoodDB(query, alimentosPersonales){
  if(!query || query.trim().length < 2 || !alimentosPersonales || alimentosPersonales.length===0) return null;
  const q = normalize(query);

  // 1. coincidencia exacta
  for(const food of alimentosPersonales){
    if(normalize(food.nombre) === q) return { nombre: food.nombre, kcal100: food.kcal100 };
  }
  // 2. coincidencia parcial, igual que en la tabla local
  let best = null;
  let bestScore = -1;
  for(const food of alimentosPersonales){
    const n = normalize(food.nombre);
    if(n.includes(q) || q.includes(n)){
      const score = Math.min(n.length, q.length) / Math.max(n.length, q.length);
      if(score > bestScore){
        bestScore = score;
        best = { nombre: food.nombre, kcal100: food.kcal100 };
      }
    }
  }
  return best;
}

// Busca el mejor match en la tabla local incorporada. Devuelve {nombre, kcal100} o null.
function searchLocalFoodDB(query){
  if(!query || query.trim().length < 2) return null;
  const q = normalize(query);

  // 1. coincidencia exacta de alias
  for(const food of FOOD_DB){
    for(const alias of food.alias){
      if(normalize(alias) === q) return { nombre: food.nombre, kcal100: food.kcal100, pesoUnidad: food.pesoUnidad || null };
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
          best = { nombre: food.nombre, kcal100: food.kcal100, pesoUnidad: food.pesoUnidad || null };
        }
      }
    }
  }
  return best;
}

// Devuelve hasta `limit` sugerencias combinando tabla personal (prioridad) + tabla local,
// para mostrar en un desplegable de autocompletado mientras el usuario escribe.
function suggestFoods(query, alimentosPersonales, limit){
  limit = limit || 5;
  if(!query || query.trim().length < 1) return [];
  const q = normalize(query);
  const results = [];
  const seen = new Set();

  // 1. tabla personal primero (más relevante para el usuario)
  (alimentosPersonales || []).forEach(food=>{
    const n = normalize(food.nombre);
    if(n.includes(q)){
      if(!seen.has(n)){
        seen.add(n);
        results.push({ nombre: food.nombre, kcal100: food.kcal100, origen: "personal" });
      }
    }
  });

  // 2. tabla local incorporada
  FOOD_DB.forEach(food=>{
    for(const alias of food.alias){
      const a = normalize(alias);
      if(a.includes(q)){
        const key = normalize(food.nombre);
        if(!seen.has(key)){
          seen.add(key);
          results.push({ nombre: food.nombre, kcal100: food.kcal100, origen: "tabla", pesoUnidad: food.pesoUnidad || null });
        }
        break;
      }
    }
  });

  // ordenar: tabla personal siempre primero, luego coincidencias que empiezan por la query, luego alfabético
  results.sort((a,b)=>{
    const aPersonal = a.origen==="personal" ? 0 : 1;
    const bPersonal = b.origen==="personal" ? 0 : 1;
    if(aPersonal !== bPersonal) return aPersonal - bPersonal;
    const aStarts = normalize(a.nombre).startsWith(q) ? 0 : 1;
    const bStarts = normalize(b.nombre).startsWith(q) ? 0 : 1;
    if(aStarts !== bStarts) return aStarts - bStarts;
    return a.nombre.localeCompare(b.nombre);
  });

  return results.slice(0, limit);
}
