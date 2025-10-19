

// ====== DỮ LIỆU MÓN ĂN ======
const dishes = [
  {
  id: 'bun-rieu-cua',
  name: 'Bún riêu cua',
  category: ['Ăn sáng'],
  image: 'images/25.jpg',
  description: 'Bún riêu cua đồng chuẩn vị quê, nước dùng chua nhẹ, riêu cua béo ngậy, ăn kèm đậu hũ chiên và rau sống tươi giòn.',
  ingredients: [
    { name: 'Cua đồng xay', amount: '400g' },
    { name: 'Thịt heo xay', amount: '100g' },
    { name: 'Trứng gà', amount: '1 quả' },
    { name: 'Cà chua', amount: '3 quả (bổ múi cau)' },
    { name: 'Đậu hũ chiên', amount: '3 miếng (cắt vừa ăn)' },
    { name: 'Bún tươi', amount: '1kg' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Giấm bỗng hoặc me chua', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Rau ăn kèm', amount: 'Rau muống bào, xà lách, tía tô, kinh giới...' }
  ],
  steps: [
    'Lọc cua đồng: Cho cua xay vào tô, thêm nước, khuấy đều rồi lọc lấy nước, bỏ bã.',
    'Đun nước cua trên lửa vừa, khuấy nhẹ tay cho đến khi riêu nổi lên, vớt phần riêu ra riêng.',
    'Phi thơm hành tím với dầu ăn, cho cà chua vào xào đến khi mềm, nêm chút muối và đường.',
    'Đổ phần cà chua xào vào nồi nước cua, thêm giấm bỗng hoặc me chua, nêm nước mắm cho vừa miệng.',
    'Trộn riêu cua với thịt heo xay và trứng gà, nặn viên nhỏ rồi cho vào nồi cho chín nổi lên.',
    'Thêm đậu hũ chiên vào nấu chung khoảng 5 phút cho thấm vị.',
    'Trụng bún qua nước sôi, cho ra tô, chan nước riêu và thêm riêu, đậu hũ, hành lá lên trên.'
  ],
  notes: 'Có thể thêm chả lụa hoặc huyết heo tùy khẩu vị. Dùng giấm bỗng giúp nước riêu dậy hương đặc trưng hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XaR2GECs2sA" title="Cách nấu bún riêu cua chuẩn vị truyền thống" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},

  {
    id: 'canh-chua-ca',
    name: 'Canh chua cá bông lau',
    category: ['Món canh','Món cá'],
    image: 'images/45.jpg',
    description: 'Canh chua miền Nam với dứa, cà chua, giá và cá tươi.',
    ingredients: [
      { name: 'Cá bông lau', amount: '500g' },
      { name: 'Dứa', amount: '150g' },
      { name: 'Cà chua', amount: '2 quả' },
      { name: 'Me chua', amount: '50g' }
    ],
    steps: [
      'Phi thơm hành, cho nước, thêm me hoặc nước cốt me.',
      'Cho dứa, cà chua vào, nấu sôi rồi cho cá.',
      'Nêm đường, muối, rau ngò gai và rau om trước khi tắt bếp.'
    ],
    notes: 'Chọn cá tươi và rửa sạch để canh không tanh.',
    video: 'https://www.youtube.com/embed/hijkLMNOPq'
  },
  {
  id: 'com-chien-duong-chau',
  name: 'Cơm chiên Dương Châu',
  category: ['Món cơm','Món trứng'],
  image: 'images/2.jpg',
  description: 'Cơm chiên Dương Châu vàng ươm, thơm lừng với trứng, tôm, lạp xưởng và rau củ đủ màu – món ngon quen thuộc mà ai ăn cũng ghiền.',
  ingredients: [
    { name: 'Cơm nguội', amount: '2 chén' },
    { name: 'Trứng gà', amount: '2 quả' },
    { name: 'Tôm tươi bóc vỏ', amount: '100g' },
    { name: 'Lạp xưởng', amount: '1 cây (luộc sơ, cắt hạt lựu)' },
    { name: 'Cà rốt', amount: '1/2 củ (cắt hạt lựu)' },
    { name: 'Đậu Hà Lan', amount: '2 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Làm nóng chảo, cho dầu ăn vào rồi đổ trứng vào chiên chín, đánh tơi ra và để riêng.',
    'Cho lạp xưởng, cà rốt, đậu Hà Lan, tôm vào xào nhanh tay cho săn lại.',
    'Thêm cơm nguội vào, đảo đều để hạt cơm tơi và khô.',
    'Nêm nước mắm, hạt nêm và tiêu cho vừa miệng.',
    'Cho trứng chiên và hành lá vào đảo đều, tắt bếp.',
    'Múc ra đĩa, rắc thêm ít tiêu nếu thích và thưởng thức nóng.'
  ],
  notes: 'Cơm nguội để qua đêm giúp hạt cơm tơi và không bị nhão. Có thể thêm thịt xá xíu hoặc xúc xích để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TIDcLWFTvQ8" title="Cách làm cơm chiên Dương Châu ngon chuẩn vị" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
  {
    id: 'trung-cuon',
    name: 'Trứng cuộn ',
    category: ['Món trứng'],
    image: 'images/1.jpg',
    description: 'Trứng cuộn kiểu mềm mịn, thơm hành, nhân cà rốt và hành tây.',
    ingredients: [
      { name: 'Trứng gà', amount: '4 quả' },
      { name: 'Cà rốt', amount: '1/2 củ (băm nhuyễn)' },
      { name: 'Hành tây', amount: '1/4 củ (băm nhỏ)' },
      { name: 'Hành lá', amount: '1 cây (thái nhỏ)' },
      { name: 'Dầu ăn', amount: '1 muỗng canh' },
      { name: 'Muối', amount: '1/4 muỗng cà phê' },
      { name: 'Tiêu', amount: '1 nhúm nhỏ' }
    ],
    steps: [
      'Đập trứng vào tô, thêm muối, tiêu, đánh tan.',
      'Cho cà rốt, hành tây, hành lá vào trộn đều.',
      'Làm nóng chảo chống dính, quét ít dầu.',
      'Đổ một lớp mỏng trứng vào chảo, nghiêng đều cho phủ mặt.',
      'Khi trứng hơi chín, dùng đũa hoặc sạn cuộn lại 1 phần.',
      'Dồn cuộn trứng sang một bên, đổ tiếp lớp trứng mới cho dính vào mép cuộn cũ, rồi cuộn tiếp.',
      'Lặp lại đến khi hết trứng, trứng chín đều vàng nhẹ.',
      'Lấy ra, để nguội 1–2 phút rồi cắt khoanh vừa ăn.'
    ],
    notes: 'Nên dùng chảo nhỏ, lửa vừa để trứng không cháy. Có thể thêm phô mai lát để béo hơn.',
    video: 'https://www.youtube.com/embed/hA5wyjKxkRA'
  },
  {
  id: 'ga-rang-la-chanh',
  name: 'Gà rang lá chanh',
  category: ['Món mặn', 'Món thịt gà'],
  image: 'images/4.jpg',
  description: 'Gà rang thơm nức mũi, vàng giòn bên ngoài, mềm bên trong, quyện hương lá chanh đặc trưng.',
  ingredients: [
    { name: 'Thịt gà (đùi hoặc cánh)', amount: '500g' },
    { name: 'Lá chanh', amount: '5–7 lá (thái sợi)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Sả', amount: '2 cây (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' },
    { name: 'Tiêu', amount: '1 nhúm nhỏ' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Rửa sạch thịt gà, chặt miếng vừa ăn, để ráo.',
    'Ướp gà với muối, tiêu, nước mắm, đường, sả băm, tỏi băm trong 20–30 phút.',
    'Làm nóng chảo, cho dầu ăn vào, phi thơm phần tỏi và sả còn lại.',
    'Cho gà đã ướp vào rang trên lửa vừa đến khi thịt săn và vàng đều.',
    'Thêm ớt và lá chanh vào đảo nhanh tay cho thơm.',
    'Nêm nếm lại cho vừa miệng, tiếp tục rang thêm 2–3 phút cho thịt thấm gia vị.',
    'Tắt bếp, rắc thêm ít lá chanh sợi lên trên trước khi dọn ra đĩa.'
  ],
  notes: 'Nên dùng gà ta để thịt dai và ngọt hơn. Có thể thêm ít mật ong khi rang để gà lên màu đẹp và thơm hơn.',
  video: 'https://www.youtube.com/embed/THu3J0_KQnI'
},
{
  id: 'ca-kho-to',
  name: 'Cá kho tộ',
  category: ['Món mặn','Món cá'],
  image: 'images/6.jpg',
  description: 'Cá kho tộ đậm đà hương vị quê nhà, thịt cá săn chắc, thấm nước màu cánh gián, thơm tiêu và hành.',
  ingredients: [
    { name: 'Cá basa hoặc cá trê', amount: '500g' },
    { name: 'Thịt ba rọi', amount: '100g (thái lát mỏng)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Đường', amount: '1 muỗng canh (làm nước màu)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Nước dừa tươi', amount: '150ml' },
    { name: 'Tiêu', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Rửa sạch cá, cắt khúc vừa ăn, để ráo. Thịt ba rọi rửa sạch, cắt mỏng.',
    'Ướp cá với nước mắm, tiêu, hành tím, tỏi, ớt trong 20–30 phút.',
    'Bắc nồi đất hoặc nồi dày, cho đường vào thắng đến khi ngả màu cánh gián, thêm chút nước và dầu ăn để làm nước màu.',
    'Cho thịt ba rọi vào đảo săn, rồi cho cá đã ướp vào.',
    'Đổ nước dừa tươi vào xâm xấp mặt cá, kho lửa lớn đến khi sôi.',
    'Hạ nhỏ lửa, kho liu riu cho nước sệt lại, cá thấm đều và lên màu đẹp.',
    'Rắc tiêu và vài lát ớt lên trên trước khi tắt bếp.'
  ],
  notes: 'Nên dùng nồi đất để cá thơm và giữ nhiệt lâu. Kho càng lâu cá càng thấm vị và ngon cơm hơn.',
  video: 'https://www.youtube.com/embed/NlTqR3hQZPQ'
},
{
  id: 'thit-kho-trung-cut',
  name: 'Thịt kho trứng cút',
  category: ['Món mặn', 'Món thịt heo'],
  image: 'images/7.jpg',
  description: 'Thịt ba rọi kho mềm thấm vị, trứng cút bùi béo, nước kho sánh đậm, ăn cùng cơm trắng cực hao cơm.',
  ingredients: [
    { name: 'Thịt ba rọi', amount: '500g' },
    { name: 'Trứng cút', amount: '10–12 quả' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '1.5 muỗng canh (để thắng nước màu)' },
    { name: 'Nước dừa tươi', amount: '200ml' },
    { name: 'Tiêu', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Luộc trứng cút, bóc vỏ, để ráo.',
    'Rửa sạch thịt ba rọi, cắt miếng vuông vừa ăn, trụng qua nước sôi để khử mùi.',
    'Ướp thịt với nước mắm, tiêu, hành tím, tỏi và muối trong 20 phút.',
    'Thắng đường với chút dầu ăn đến khi chuyển màu cánh gián, cho thịt vào đảo săn.',
    'Đổ nước dừa tươi vào xâm xấp mặt thịt, đun sôi rồi hạ nhỏ lửa, kho liu riu khoảng 20 phút.',
    'Thêm trứng cút vào, tiếp tục kho đến khi nước sánh, thịt mềm và thấm vị.',
    'Nêm nếm lại vừa miệng, rắc ít tiêu xay lên trước khi tắt bếp.'
  ],
  notes: 'Kho bằng nước dừa giúp thịt béo ngọt tự nhiên. Có thể thay trứng cút bằng trứng gà nhỏ tùy khẩu vị.',
  video: 'https://www.youtube.com/embed/yAEtzPqvBsw'
},
{
  id: 'suon-xao-chua-ngot',
  name: 'Sườn xào chua ngọt',
  category: ['Món mặn', 'Món thịt heo'],
  image: 'images/12.jpg',
  description: 'Sườn heo giòn ngoài mềm trong, áo đều lớp sốt chua ngọt, thêm ớt chuông rực rỡ bắt mắt – món “bắt cơm” quốc dân.',
  ingredients: [
    { name: 'Sườn non heo', amount: '500g' },
    { name: 'Ớt chuông đỏ', amount: '1/2 trái (cắt vuông)' },
    { name: 'Ớt chuông vàng', amount: '1/2 trái (cắt vuông)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Giấm hoặc nước cốt chanh', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1.5 muỗng canh' },
    { name: 'Tương cà', amount: '2 muỗng canh' },
    { name: 'Nước lọc', amount: '2 muỗng canh' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt khúc)' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' }
  ],
  steps: [
    'Rửa sạch sườn, chặt miếng vừa ăn, trụng qua nước sôi cho sạch bọt.',
    'Ướp sườn với muối, tiêu, hành tím và tỏi trong 20 phút.',
    'Pha nước sốt chua ngọt: giấm (hoặc chanh) + đường + nước mắm + tương cà + nước lọc, khuấy đều.',
    'Chiên sườn trong chảo dầu đến khi vàng đều, vớt ra để ráo.',
    'Đổ bớt dầu, phi thơm tỏi, cho sườn vào đảo, thêm nước sốt vào rim lửa vừa cho sệt lại.',
    'Thêm ớt chuông vào xào nhanh tay để giữ độ giòn và màu tươi.',
    'Tắt bếp, rắc hành lá lên trên và dọn ra đĩa.'
  ],
  notes: 'Có thể thêm chút mật ong để vị chua ngọt dịu hơn. Món này ngon nhất khi ăn nóng cùng cơm trắng.',
  video: 'https://www.youtube.com/embed/qLEyU6bWxxg'
},
{
  id: 'canh-rong-bien-tom',
  name: 'Canh rong biển tôm',
  category: ['Món canh', 'Món tôm'],
  image: 'images/8.jpg',
  description: 'Canh rong biển tôm thanh ngọt, mát lành – món canh nhẹ bụng cho những ngày nắng nóng hay muốn đổi vị sau bữa ăn nhiều dầu mỡ.',
  ingredients: [
    { name: 'Rong biển khô', amount: '10g (ngâm mềm, cắt nhỏ)' },
    { name: 'Tôm tươi', amount: '150g (bóc vỏ, rút chỉ lưng)' },
    { name: 'Nấm rơm hoặc nấm mỡ', amount: '100g (cắt lát)' },
    { name: 'Gừng', amount: '2 lát mỏng' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Nước lọc', amount: '800ml' },
    { name: 'Dầu ăn', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu', amount: '1 ít (tùy chọn)' }
  ],
  steps: [
    'Rửa sạch rong biển khô, ngâm cho nở rồi cắt nhỏ vừa ăn.',
    'Phi gừng và đầu hành với dầu ăn cho thơm, cho tôm vào xào săn.',
    'Đổ nước lọc vào, đun sôi rồi hớt bọt cho nước trong.',
    'Cho nấm vào nấu chín, nêm muối và nước mắm vừa miệng.',
    'Cuối cùng cho rong biển vào, nấu thêm 1 phút rồi tắt bếp.',
    'Múc ra tô, rắc hành lá và tiêu, dùng nóng.'
  ],
  notes: 'Không nên nấu rong biển quá lâu để giữ độ giòn và hương vị tự nhiên. Có thể thêm đậu hũ non để canh thêm béo và bổ dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sEGhbxE7AVw" title="Cách nấu canh rong biển tôm thanh mát đơn giản tại nhà" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-ngam-tuong',
  name: 'Tôm ngâm tương',
  category: ['Món tôm'],
  image: 'images/9.jpg',
  description: 'Tôm ngâm tương – món ăn Hàn Quốc độc đáo với hương vị mặn ngọt hài hòa, thịt tôm tươi ngọt quyện cùng nước tương thơm nồng, ăn với cơm trắng cực hao cơm.',
  ingredients: [
    { name: 'Tôm tươi to (loại tôm sú hoặc tôm thẻ)', amount: '500g' },
    { name: 'Nước tương Hàn Quốc (hoặc nước tương đậm)', amount: '200ml' },
    { name: 'Nước lọc', amount: '100ml' },
    { name: 'Đường nâu', amount: '2 muỗng canh' },
    { name: 'Tỏi', amount: '5 tép (băm nhỏ)' },
    { name: 'Ớt tươi', amount: '2 trái (cắt lát)' },
    { name: 'Gừng', amount: '3 lát mỏng' },
    { name: 'Hành lá', amount: '2 nhánh (cắt khúc)' },
    { name: 'Rượu mirin hoặc rượu trắng', amount: '1 muỗng canh' },
    { name: 'Tiêu đen', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Rửa sạch tôm, cắt bỏ râu và phần gai nhọn trên đầu, để ráo nước.',
    'Đun nước sôi, chần tôm 20–30 giây rồi vớt ra ngâm nước đá cho tôm săn giòn, để nguội.',
    'Đun nước tương, nước lọc, đường nâu, tỏi, gừng, hành lá, ớt và mirin đến khi sôi, tắt bếp và để nguội hoàn toàn.',
    'Xếp tôm vào hũ thủy tinh sạch, rót hỗn hợp nước tương đã nguội vào ngập tôm.',
    'Đậy kín nắp, bảo quản trong tủ lạnh ít nhất 8 tiếng (ngon nhất sau 1 ngày).',
    'Khi ăn, gắp tôm ra, bóc vỏ và chấm thêm với ít nước ngâm tương hoặc ăn kèm cơm nóng.'
  ],
  notes: 'Tôm phải thật tươi để giữ vị ngọt tự nhiên. Có thể thay tôm bằng trứng gà luộc, cá hồi hoặc sò nếu muốn biến tấu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4XlFcZxLjeY" title="Cách làm tôm ngâm tương kiểu Hàn Quốc chuẩn vị" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-chien-xu',
  name: 'Tôm Chiên Xù',
  category: ['Món tôm', 'Món chiên'],
  image: 'images/31.jpg',
  description: 'Tôm chiên xù – món ăn vàng ruộm giòn tan, thịt tôm ngọt tự nhiên quyện lớp vỏ xù giòn rụm, chấm cùng tương ớt hoặc mayonnaise là “hết sảy con bà bảy”.',
  ingredients: [
    { name: 'Tôm tươi (tôm sú hoặc tôm thẻ)', amount: '300g' },
    { name: 'Bột chiên giòn', amount: '100g' },
    { name: 'Bột chiên xù', amount: '100g' },
    { name: 'Trứng gà', amount: '2 quả' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Muối, tiêu, chanh', amount: 'vừa đủ' }
  ],
  steps: [
    'Tôm rửa sạch, bóc vỏ chừa đuôi, rút chỉ lưng cho đẹp.',
    'Ướp với muối, tiêu và chút nước cốt chanh khoảng 10 phút cho thấm vị.',
    'Lăn tôm lần lượt qua bột chiên giòn → trứng đánh tan → bột chiên xù.',
    'Đun dầu nóng, chiên ngập tôm ở lửa vừa cho đến khi vàng giòn đều hai mặt.',
    'Vớt ra để ráo dầu, ăn kèm với tương ớt hoặc mayonnaise.'
  ],
  notes: 'Chiên tôm với dầu nóng vừa phải, không chiên quá lâu để tôm không bị khô. Có thể thêm ít bột bắp vào bột chiên giòn để vỏ giòn lâu hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7F1YqP0dFvQ" title="Cách làm tôm chiên xù giòn tan hấp dẫn tại nhà" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cha-gio-nhan-tom',
  name: 'Chả Giò Nhân Tôm',
  category: ['Món tôm', 'Món chiên'],
  image: 'images/46.jpg',
  description: 'Chả giò nhân tôm – cuốn giòn rụm bên ngoài, nhân tôm ngọt béo hòa quyện cùng rau củ thơm bùi. Món ăn “quốc dân” của mọi bữa tiệc Việt, chấm cùng nước mắm chua ngọt là chuẩn bài luôn!',
  ingredients: [
    { name: 'Tôm tươi (bóc vỏ, băm nhỏ)', amount: '200g' },
    { name: 'Thịt heo xay', amount: '150g' },
    { name: 'Miến khô', amount: '50g (ngâm mềm, cắt nhỏ)' },
    { name: 'Cà rốt', amount: '1 củ (bào sợi)' },
    { name: 'Mộc nhĩ', amount: '3 tai (ngâm nở, thái nhỏ)' },
    { name: 'Hành tím, tỏi băm', amount: '1 muỗng canh' },
    { name: 'Trứng gà', amount: '1 quả' },
    { name: 'Bánh tráng rế hoặc bánh tráng mỏng cuốn chả giò', amount: '10–12 lá' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Gia vị: muối, tiêu, hạt nêm, nước mắm, đường', amount: 'vừa đủ' }
  ],
  steps: [
    'Trộn đều tôm, thịt xay, miến, cà rốt, mộc nhĩ, hành tỏi băm và trứng gà trong tô lớn. Nêm muối, tiêu, hạt nêm, nước mắm cho vừa ăn.',
    'Trải bánh tráng ra mặt phẳng, múc 1 muỗng nhân vào giữa, cuốn chặt tay.',
    'Bắc chảo dầu, đun nóng, chiên chả giò ở lửa vừa cho đến khi vàng đều hai mặt.',
    'Vớt ra để ráo dầu, thưởng thức khi nóng cùng nước mắm chua ngọt và rau sống.'
  ],
  notes: 'Có thể thêm củ sắn hoặc khoai môn bào nhỏ vào nhân để tăng độ ngọt và giòn. Chiên 2 lần (lần đầu sơ, lần hai trước khi ăn) giúp chả giò giòn lâu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/T7x1yS0T3nM" title="Cách làm chả giò nhân tôm giòn rụm, ngon chuẩn vị Việt Nam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cha-ram-tom-dat',
  name: 'Chả Ram Tôm Đất',
  category: ['Món tôm', 'Món chiên'],
  image: 'images/47.jpg',
  description: 'Chả ram tôm đất – món đặc sản miền Trung “nhỏ mà có võ”! Vỏ bánh tráng giòn rụm ôm trọn con tôm đất ngọt thịt, chấm cùng nước mắm tỏi ớt cay cay mặn mặn là hết sảy luôn 🍤🔥',
  ingredients: [
    { name: 'Tôm đất tươi (bóc vỏ, chừa đuôi)', amount: '300g' },
    { name: 'Thịt ba chỉ', amount: '100g (băm nhuyễn hoặc cắt nhỏ)' },
    { name: 'Bánh tráng cuốn ram', amount: '10–12 lá' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Hành tím băm', amount: '1 muỗng cà phê' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Gia vị: muối, tiêu, nước mắm, hạt nêm, đường', amount: 'vừa đủ' }
  ],
  steps: [
    'Rửa sạch tôm đất, bỏ chỉ lưng, để ráo nước. Thịt ba chỉ băm nhuyễn, ướp cùng tỏi, hành tím, tiêu, hạt nêm và ít nước mắm.',
    'Trải bánh tráng, đặt 1 lát thịt và 1 con tôm lên, cuốn chặt tay để khi chiên không bị bung.',
    'Bắc chảo dầu, đun nóng và chiên chả ram ở lửa vừa cho đến khi vàng đều, vỏ giòn rụm.',
    'Vớt ra để ráo dầu, ăn kèm rau sống, bún tươi và chén nước mắm chua ngọt.'
  ],
  notes: 'Mẹo nhỏ: phơi bánh tráng qua nắng nhẹ trước khi cuốn giúp cuốn dễ và không bị nứt. Dầu chiên phải đủ ngập để ram vàng đều.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vpYw0tKcT7k" title="Cách làm chả ram tôm đất giòn rụm chuẩn vị miền Trung | Món ngon Việt Nam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'banh-xeo-nhan-tom',
  name: 'Bánh xèo nhân tôm',
  category: [ 'Món chiên', 'Món tôm'],
  image: 'images/48.jpg',
  description: 'Bánh xèo nhân tôm – món ăn dân dã mang hương vị quê nhà 🇻🇳. Vỏ bánh vàng giòn, nhân tôm thịt đậm đà, giá đỗ tươi giòn, ăn kèm rau sống và nước mắm chua ngọt – chuẩn vị Việt Nam luôn!',
  ingredients: [
    { name: 'Bột bánh xèo (hoặc bột gạo pha sẵn)', amount: '200g' },
    { name: 'Nước cốt dừa', amount: '150ml' },
    { name: 'Nước lọc', amount: '200ml' },
    { name: 'Nghệ bột', amount: '1/2 muỗng cà phê (tạo màu vàng đẹp)' },
    { name: 'Tôm tươi (bóc vỏ, chừa đuôi)', amount: '200g' },
    { name: 'Thịt ba chỉ', amount: '100g (cắt mỏng)' },
    { name: 'Giá đỗ', amount: '100g' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Rau sống', amount: 'xà lách, cải bẹ, diếp cá, tía tô...' },
    { name: 'Nước mắm pha', amount: 'chua ngọt, tỏi ớt, cà rốt bào sợi' },
    { name: 'Dầu ăn', amount: 'vừa đủ' },
    { name: 'Gia vị', amount: 'muối, tiêu, hạt nêm, đường' }
  ],
  steps: [
    'Pha bột bánh: Trộn bột bánh xèo với nước cốt dừa, nước lọc, nghệ bột và hành lá, khuấy đều để bột nghỉ 30 phút.',
    'Làm nhân: Xào sơ thịt ba chỉ và tôm với ít gia vị cho săn, để riêng.',
    'Làm bánh: Đun nóng chảo, cho ít dầu, múc một vá bột láng đều mặt chảo, cho tôm thịt và giá đỗ vào giữa.',
    'Đậy nắp khoảng 2 phút cho bánh chín, mở nắp chiên thêm đến khi viền bánh vàng giòn, gập đôi bánh lại.',
    'Ăn kèm với rau sống và nước mắm chua ngọt.'
  ],
  notes: 'Chiên bánh trên chảo chống dính và lửa vừa để vỏ bánh giòn đều mà không cháy. Có thể thay tôm bằng mực hoặc nấm nếu muốn ăn chay.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XC9yF7v6WBY" title="Cách làm bánh xèo nhân tôm giòn lâu chuẩn vị miền Nam | Vietnamese Pancake Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-nuong-phomai',
  name: 'Tôm nướng phô mai',
  category: ['Món nướng', 'Món tôm',],
  image: 'images/49.jpg',
  description: 'Tôm nướng phô mai 🧀🦐 – món ăn “gây nghiện” bởi sự hòa quyện giữa vị ngọt tươi của tôm và lớp phô mai béo ngậy, thơm lừng. Cắn một miếng là kéo sợi phô mai tan chảy, ngon quên lối về!',
  ingredients: [
    { name: 'Tôm sú tươi', amount: '500g (rửa sạch, bỏ chỉ lưng)' },
    { name: 'Phô mai mozzarella', amount: '100g (bào sợi)' },
    { name: 'Bơ lạt', amount: '20g' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Sữa tươi không đường', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau mùi hoặc ngò tây', amount: '1 ít (trang trí)' }
  ],
  steps: [
    'Rửa sạch tôm, bỏ chỉ lưng, để ráo nước.',
    'Làm tan bơ, phi thơm tỏi băm rồi cho sữa tươi, muối và tiêu vào, khuấy đều.',
    'Ướp tôm với hỗn hợp bơ tỏi trong khoảng 15 phút cho thấm gia vị.',
    'Xếp tôm ra khay, rắc phô mai mozzarella phủ đều lên mặt.',
    'Nướng ở nhiệt độ 180°C trong 10–12 phút (hoặc đến khi phô mai tan chảy và hơi vàng).',
    'Trang trí thêm rau mùi cho đẹp mắt, thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Không nên nướng quá lâu để tôm không bị khô. Có thể thay mozzarella bằng cheddar hoặc mix cả hai loại phô mai để tăng độ béo thơm.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y3kRZ_p1FhM" title="Cách làm tôm nướng phô mai thơm béo, kéo sợi cực hấp dẫn | Grilled Shrimp with Cheese" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-xao-rau-cu',
  name: 'Tôm xào rau củ',
  category: ['Món xào', 'Món tôm'],
  image: 'images/50.jpg',
  description: 'Tôm xào rau củ – món ăn vừa ngon miệng vừa nhiều dinh dưỡng 🥦🦐. Tôm giòn ngọt, rau củ tươi xanh, hòa quyện trong vị đậm đà, thanh mát, cực hợp cho bữa cơm gia đình!',
  ingredients: [
    { name: 'Tôm tươi', amount: '300g (bóc vỏ, bỏ chỉ lưng)' },
    { name: 'Bông cải xanh (broccoli)', amount: '150g (cắt khúc nhỏ)' },
    { name: 'Cà rốt', amount: '1 củ (tỉa hoa, cắt lát mỏng)' },
    { name: 'Đậu Hà Lan', amount: '100g' },
    { name: 'Ngô non (bắp non)', amount: '100g' },
    { name: 'Nấm mèo (mộc nhĩ)', amount: '2 tai (ngâm nở, cắt sợi)' },
    { name: 'Ớt chuông đỏ', amount: '1/2 trái (cắt lát)' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Gia vị', amount: 'muối, hạt nêm, tiêu, nước mắm, đường' }
  ],
  steps: [
    'Tôm rửa sạch, bóc vỏ, bỏ chỉ lưng và để ráo.',
    'Luộc sơ rau củ (bông cải, cà rốt, ngô non, đậu Hà Lan) trong nước sôi 1–2 phút, vớt ra để ráo.',
    'Phi thơm tỏi trong chảo dầu, cho tôm vào xào đến khi săn lại, thêm ít gia vị.',
    'Cho toàn bộ rau củ và nấm mèo vào đảo đều tay cùng tôm, nêm nếm lại cho vừa miệng.',
    'Xào thêm 2 phút, khi rau củ còn giữ độ giòn thì tắt bếp, dọn ra đĩa và thưởng thức.'
  ],
  notes: 'Không nên xào quá lâu để rau củ giữ được màu xanh và độ giòn. Có thể thêm dầu hào để món ăn đậm vị hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jmH39L4Y1xI" title="Cách làm tôm xào rau củ giòn ngọt, thanh mát | Stir-fried Shrimp with Vegetables Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-rang-muoi',
  name: 'Tôm rang muối',
  category: ['Món tôm'],
  image: 'images/51.jpg',
  description: 'Tôm rang muối – món ngon giòn rụm bên ngoài, ngọt mềm bên trong 🦐✨. Lớp muối rang mằn mặn hòa quyện cùng vị tôm tươi, thơm lừng cực cuốn, ăn chơi hay ăn cơm đều hết sảy!',
  ingredients: [
    { name: 'Tôm sú (hoặc tôm thẻ to)', amount: '400g (rửa sạch, để nguyên vỏ)' },
    { name: 'Bột năng', amount: '2 muỗng canh' },
    { name: 'Lòng trắng trứng', amount: '1 cái' },
    { name: 'Muối hột', amount: '2 muỗng canh' },
    { name: 'Gạo nếp', amount: '2 muỗng canh' },
    { name: 'Đậu xanh cà vỏ', amount: '1 muỗng canh' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Ớt tươi', amount: '1 trái (băm nhỏ)' },
    { name: 'Dầu ăn', amount: 'vừa đủ để chiên' },
    { name: 'Gia vị', amount: 'muối, tiêu, hạt nêm, đường' }
  ],
  steps: [
    'Rang gạo nếp, đậu xanh và muối hột riêng từng loại cho vàng thơm, sau đó xay nhuyễn chung thành hỗn hợp “muối rang”.',
    'Tôm rửa sạch, cắt râu, để ráo rồi ướp với chút tiêu, hạt nêm và lòng trắng trứng trong 10 phút.',
    'Áo đều tôm với bột năng, cho vào chảo dầu nóng chiên đến khi vàng giòn, vớt ra để ráo dầu.',
    'Làm nóng chảo khác, cho tỏi và ớt vào phi thơm, rồi cho tôm chiên và muối rang vào đảo đều cho muối bám đều lên tôm.',
    'Tắt bếp, dọn ra đĩa, rắc thêm chút muối rang lên trên cho đẹp mắt và thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Có thể thêm lá chanh thái sợi hoặc sả chiên giòn để món ăn dậy mùi thơm đặc trưng. Không nên chiên tôm quá lâu để giữ độ ngọt tự nhiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2cOr4rSk5ug" title="Cách làm tôm rang muối giòn rụm, mặn mà chuẩn vị nhà hàng | Crispy Salted Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-sot-bo-toi',
  name: 'Tôm sốt bơ tỏi',
  category: ['Món tôm'],
  image: 'images/52.jpg',
  description: 'Tôm sốt bơ tỏi – món ăn “gây nghiện” bởi hương thơm béo ngậy của bơ hòa cùng vị tôm tươi ngọt 🧈🦐. Mỗi miếng tôm phủ lớp sốt vàng óng, thơm nức mũi, ăn cùng cơm nóng thì chỉ có “hết sạch nồi”!',
  ingredients: [
    { name: 'Tôm sú (hoặc tôm thẻ to)', amount: '400g (bóc vỏ, chừa đuôi)' },
    { name: 'Bơ lạt', amount: '40g' },
    { name: 'Tỏi băm', amount: '4 tép (băm nhuyễn)' },
    { name: 'Ớt băm', amount: '1 trái (tùy chọn)' },
    { name: 'Nước mắm ngon', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu đen', amount: '1/4 muỗng cà phê' },
    { name: 'Chanh (vắt lấy nước cốt)', amount: '1/2 quả' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Rửa sạch tôm, để ráo rồi ướp với chút tiêu, nước mắm, đường và nước cốt chanh khoảng 10 phút cho thấm vị.',
    'Làm nóng chảo, cho dầu ăn vào áp chảo tôm cho đến khi hai mặt tôm chuyển màu đỏ cam đẹp mắt, gắp ra để riêng.',
    'Trong cùng chảo, cho bơ vào đun chảy, rồi phi tỏi và ớt cho thơm vàng.',
    'Cho tôm đã áp chảo trở lại, đảo nhanh tay cho tôm áo đều lớp sốt bơ tỏi.',
    'Rắc hành lá, tiêu và tắt bếp ngay khi tôm vừa thấm đều gia vị. Dọn ra đĩa, dùng nóng.'
  ],
  notes: 'Không nên nấu quá lâu để tôm không bị khô. Có thể thêm chút mật ong hoặc nước cốt chanh để sốt bơ tỏi dậy vị và cân bằng độ béo.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8Bv1p7kBjqE" title="Cách làm tôm sốt bơ tỏi thơm béo cực hấp dẫn | Butter Garlic Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lau-tom',
  name: 'Lẩu tôm',
  category: ['Món tôm', 'Món lẩu'],
  image: 'images/53.jpg',
  description: 'Lẩu tôm – món lẩu thơm nồng, ngọt vị tự nhiên từ tôm tươi, sả và cà chua. Nước dùng cay nhẹ, đậm đà, ăn cùng rau xanh, nấm và bún tươi cực hợp cho những ngày se lạnh hay tụ họp gia đình.',
  ingredients: [
    { name: 'Tôm tươi (tôm sú hoặc tôm thẻ)', amount: '500g' },
    { name: 'Xương heo (hoặc đầu tôm)', amount: '300g (ninh lấy nước dùng)' },
    { name: 'Cà chua', amount: '3 quả (bổ múi cau)' },
    { name: 'Sả cây', amount: '3 cây (đập dập, cắt khúc)' },
    { name: 'Ớt tươi', amount: '2 trái (tùy khẩu vị)' },
    { name: 'Hành tím', amount: '3 củ (băm nhỏ)' },
    { name: 'Nấm rơm (hoặc nấm kim châm)', amount: '200g' },
    { name: 'Rau ăn lẩu', amount: 'rau muống, cải thảo, bạc hà, bông súng...' },
    { name: 'Bún tươi', amount: '500g' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Sa tế (hoặc ớt bột)', amount: '1 muỗng canh (tạo vị cay nhẹ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Ninh xương heo (hoặc đầu tôm) với sả và hành tím khoảng 30–40 phút để lấy nước dùng ngọt.',
    'Phi thơm hành tím, cho cà chua vào xào mềm, nêm muối và đường, sau đó cho vào nồi nước dùng.',
    'Thêm nước mắm, sa tế và ớt để tạo vị đậm đà và cay nhẹ.',
    'Cho tôm tươi và nấm vào nồi lẩu khi nước dùng sôi, nấu đến khi tôm chín hồng.',
    'Dọn lẩu ra bàn, ăn kèm rau xanh và bún tươi, chấm cùng nước mắm ớt chanh.'
  ],
  notes: 'Có thể cho thêm đầu cá hoặc mực để nước dùng thêm ngọt. Nếu muốn vị chua thanh, có thể thêm chút me hoặc giấm bỗng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t7EGF3qgW4E" title="Cách nấu lẩu tôm chua cay đậm đà, dễ làm tại nhà | Tom Yum Goong Việt hóa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'chao-tom',
  name: 'Cháo tôm',
  category: ['Món cháo', 'Món tôm'],
  image: 'images/54.jpg',
  description: 'Cháo tôm – món ăn thanh đạm, bổ dưỡng, dễ ăn và hợp với mọi lứa tuổi. Tôm tươi ngọt thịt quyện cùng cháo nóng hổi, dậy mùi hành thơm – ấm bụng cho bữa sáng hay tối nhẹ nhàng.',
  ingredients: [
    { name: 'Gạo tẻ', amount: '200g' },
    { name: 'Tôm tươi (tôm thẻ hoặc tôm sú)', amount: '300g (bóc vỏ, bỏ chỉ lưng, băm hoặc cắt nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Gừng tươi', amount: '3 lát mỏng' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn hoặc dầu mè', amount: '1 muỗng canh' },
    { name: 'Tiêu', amount: 'tùy thích' }
  ],
  steps: [
    'Vo sạch gạo, cho vào nồi với khoảng 1,5 lít nước, thêm vài lát gừng rồi nấu sôi, hạ nhỏ lửa hầm đến khi cháo nở mềm.',
    'Tôm làm sạch, băm nhỏ rồi ướp với chút muối, tiêu và nước mắm trong 10 phút.',
    'Phi thơm hành tím trong chảo dầu, cho tôm vào xào săn rồi trút vào nồi cháo.',
    'Khuấy đều, nấu thêm 10–15 phút cho tôm chín và cháo sánh lại. Nêm lại gia vị vừa ăn.',
    'Múc cháo ra tô, thêm hành lá, tiêu và ít dầu mè. Dùng nóng.'
  ],
  notes: 'Có thể thêm nấm rơm hoặc trứng bắc thảo để tăng hương vị. Cháo tôm thích hợp cho người ốm, trẻ nhỏ hoặc dùng làm bữa sáng nhẹ nhàng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/dcPgHgNwv2g" title="Cách nấu cháo tôm ngon ngọt, bổ dưỡng và dễ làm tại nhà" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'soup-tom',
  name: 'Súp tôm',
  category: ['Món súp', 'Món tôm'],
  image: 'images/55.jpg',
  description: 'Súp tôm – món khai vị thanh nhẹ nhưng đầy dinh dưỡng, vị ngọt tự nhiên từ tôm hòa quyện cùng độ sánh mịn của nước súp, thơm dịu và ấm bụng. Thích hợp cho cả người lớn và trẻ nhỏ.',
  ingredients: [
    { name: 'Tôm tươi (tôm thẻ hoặc tôm sú)', amount: '200g (bóc vỏ, bỏ chỉ lưng, cắt nhỏ)' },
    { name: 'Trứng gà', amount: '1 quả (đánh tan)' },
    { name: 'Bắp mỹ (hoặc bắp non)', amount: '100g (bào hạt)' },
    { name: 'Cà rốt', amount: '1/2 củ (băm nhỏ hoặc cắt hạt lựu)' },
    { name: 'Nấm đông cô hoặc nấm rơm', amount: '50g (thái nhỏ)' },
    { name: 'Bột năng', amount: '2 muỗng canh (hòa tan với nước lạnh)' },
    { name: 'Nước dùng gà (hoặc nước sôi)', amount: '1 lít' },
    { name: 'Hành tím', amount: '1 củ (phi thơm)' },
    { name: 'Dầu mè', amount: '1 muỗng cà phê' },
    { name: 'Gia vị', amount: 'muối, đường, hạt nêm, tiêu' }
  ],
  steps: [
    'Đun nóng nồi, cho ít dầu và hành tím vào phi thơm.',
    'Cho tôm, cà rốt, bắp và nấm vào xào sơ cho thấm gia vị.',
    'Đổ nước dùng gà vào nồi, nấu sôi khoảng 10–15 phút cho rau củ mềm.',
    'Cho từ từ bột năng đã hòa nước vào, khuấy đều đến khi súp sánh nhẹ.',
    'Rót trứng gà đã đánh tan vào nồi, khuấy theo một chiều để tạo vân đẹp.',
    'Nêm nếm lại cho vừa miệng, thêm dầu mè và tiêu xay. Dọn ra chén, ăn nóng.'
  ],
  notes: 'Có thể thêm thịt gà xé hoặc cua cho súp thêm phần hấp dẫn. Súp tôm ngon nhất khi dùng nóng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2VDaUBr3Xy8" title="Cách nấu súp tôm thơm ngon, sánh mịn chuẩn vị nhà hàng | Shrimp Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'goi-tom',
  name: 'Gỏi tôm',
  category: ['Món gỏi', 'Món tôm'],
  image: 'images/56.jpg',
  description: 'Gỏi tôm – món ăn thanh mát, giòn sần sật, hòa quyện giữa vị chua ngọt đậm đà và độ tươi ngọt của tôm luộc. Món gỏi dân dã nhưng luôn khiến người ăn nhớ mãi bởi hương vị hài hòa khó quên.',
  ingredients: [
    { name: 'Tôm tươi (tôm thẻ hoặc tôm sú)', amount: '300g (luộc chín, bóc vỏ, chẻ đôi)' },
    { name: 'Củ hủ dừa hoặc bắp chuối bào', amount: '150g (rửa sạch, để ráo)' },
    { name: 'Cà rốt', amount: '1/2 củ (bào sợi)' },
    { name: 'Hành tây', amount: '1/2 củ (thái lát mỏng, ngâm nước đá)' },
    { name: 'Rau thơm (rau răm, húng lủi)', amount: 'một ít (rửa sạch, cắt nhỏ)' },
    { name: 'Đậu phộng rang', amount: '2 muỗng canh (giã dập)' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Ớt băm', amount: '1/2 muỗng cà phê (tùy thích)' },
    { name: 'Nước mắm ngon', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '2 muỗng canh' },
    { name: 'Nước cốt chanh', amount: '1 muỗng canh' },
    { name: 'Bánh phồng tôm', amount: 'vừa đủ (chiên phồng để ăn kèm)' }
  ],
  steps: [
    'Pha nước trộn gỏi: hòa nước mắm, đường, nước cốt chanh, tỏi và ớt băm cho tan đều.',
    'Cho củ hủ dừa, cà rốt, hành tây và rau thơm vào tô lớn, rưới nước trộn gỏi vào rồi trộn nhẹ cho thấm.',
    'Thêm tôm luộc vào, trộn đều tay để gia vị quyện đều.',
    'Rắc đậu phộng rang lên trên, trộn lại lần cuối.',
    'Dọn ra đĩa, ăn kèm bánh phồng tôm giòn rụm.'
  ],
  notes: 'Có thể thêm ít thịt ba chỉ luộc hoặc tai heo thái mỏng nếu muốn món gỏi thêm phong phú. Nên trộn gỏi trước khi ăn để giữ độ giòn của rau củ.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mB4vKO6LxZg" title="Cách làm gỏi tôm ngon giòn thanh mát dễ làm tại nhà | Vietnamese Shrimp Salad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'banh-bot-loc-tom',
  name: 'Bánh bột lọc tôm',
  category: ['Món tôm'],
  image: 'images/57.jpg',
  description: 'Bánh bột lọc tôm – món ăn dân dã miền Trung với lớp vỏ trong suốt, dai dai ôm trọn nhân tôm thịt đậm đà. Khi ăn chấm cùng nước mắm chua ngọt cay nhẹ, hương vị hòa quyện khiến ai cũng mê.',
  ingredients: [
    { name: 'Bot nang', amount: '200g' },
    { name: 'Tom tuoi', amount: '150g (cat bo dau, rua sach)' },
    { name: 'Thit ba roi', amount: '100g (thai hat luu, xao chin)' },
    { name: 'Toi bam', amount: '1 muong ca phe' },
    { name: 'Nuoc mam ngon', amount: '2 muong canh' },
    { name: 'Duong', amount: '1 muong canh' },
    { name: 'Ot bam', amount: '1/2 muong ca phe (tuy thich)' },
    { name: 'La chuoi', amount: 'vua du (rua sach, cat mieng nho de goi)' },
    { name: 'Dau an', amount: '1 muong canh' }
  ],
  steps: [
    'Xao nhan: phi toi voi dau an, cho thit ba roi vao xao chin, them tom vao xao cung, nem nuoc mam, duong, ot cho vua vi. De nguoi.',
    'Nhao bot: cho bot nang vao to, do nuoc soi tu tu, nhao den khi bot mem deo, khong dinh tay.',
    'Chia bot thanh tung vien nho, can mong, bo nhan tom thit vao giua, gap lai va bop kin mieng.',
    'Goi banh bang la chuoi (neu thich), hoac de tran, sau do hap trong khoang 20 phut den khi vo banh trong.',
    'An kem voi nuoc mam chua ngot, co the them hanh phi va mo hanh cho them huong vi.'
  ],
  notes: 'Neu muon vo banh mem hon, co the pha bot nang voi chut bot san day. Tom nen de ca vo tom de khi xao co mau do dep.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LMmM8QXovyg" title="Cach lam banh bot loc nhan tom thit chuan vi Hue | Vietnamese Shrimp Tapioca Dumpling" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ha-cao-tom',
  name: 'Há cảo tôm',
  category: ['Món tôm'],
  image: 'images/58.jpg',
  description: 'Há cảo tôm – món dimsum trứ danh với lớp vỏ mỏng trong suốt ôm trọn phần nhân tôm tươi ngọt thịt. Khi hấp chín, há cảo căng mọng, thơm nhẹ mùi dầu mè, cắn vào là vị ngọt thanh lan tỏa. Một món ăn vừa tinh tế, vừa dễ gây “nghiện”.',
  ingredients: [
    { name: 'Tôm tươi (tôm thẻ hoặc tôm sú)', amount: '200g (bóc vỏ, bỏ chỉ lưng, băm nhỏ hoặc cắt hạt lựu)' },
    { name: 'Thịt heo xay', amount: '100g (nạc vai hoặc ba rọi xay nhuyễn)' },
    { name: 'Củ năng hoặc nấm mèo', amount: '30g (băm nhỏ, tạo độ giòn)' },
    { name: 'Hành lá', amount: '1 nhánh (băm nhỏ)' },
    { name: 'Dầu mè', amount: '1 muỗng cà phê' },
    { name: 'Gia vị', amount: 'muối, tiêu, đường, hạt nêm' },
    { name: 'Bột há cảo (hoặc bột năng + bột mì tinh)', amount: '200g' },
    { name: 'Nước sôi', amount: 'khoảng 150ml (để trộn bột)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh (chống dính khi nhồi bột)' }
  ],
  steps: [
    'Trộn nhân: Cho tôm, thịt heo xay, củ năng, hành lá, dầu mè và gia vị vào tô. Trộn đều cho hỗn hợp quyện lại, để nghỉ 10 phút cho thấm.',
    'Làm vỏ há cảo: Cho bột há cảo vào tô, chế từ từ nước sôi, trộn đều rồi nhồi đến khi khối bột mịn, dẻo. Thêm chút dầu ăn để bột không dính tay.',
    'Cán bột thành từng miếng tròn mỏng. Cho nhân tôm vào giữa, gấp đôi lại và tạo nếp viền cho đẹp.',
    'Đặt há cảo vào xửng, hấp khoảng 8–10 phút đến khi vỏ trong và nhân chín.',
    'Dọn ra dĩa, dùng nóng với nước tương pha chanh, ớt hoặc dầu ớt tỏi.'
  ],
  notes: 'Có thể thay phần nhân bằng tôm – thịt – mực hoặc thêm chút gừng băm để nhân dậy mùi hơn. Khi hấp nên lót lá cải hoặc giấy nến để há cảo không dính xửng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v7gW2y-U8gE" title="Cách làm há cảo tôm thơm ngon, vỏ trong nhân ngọt chuẩn dimsum | Shrimp Dumplings Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-kho-dua',
  name: 'Thịt kho dứa',
  category: ['Món thịt heo', 'Món mặn'],
  image: 'images/59.jpg',
  description: 'Thịt kho dứa – món ăn dân dã mà đưa cơm vô cùng. Thịt ba rọi béo mềm hòa quyện vị chua ngọt tự nhiên của dứa, nước kho sánh màu cánh gián óng đẹp, mùi thơm dịu và đậm đà khó cưỡng.',
  ingredients: [
    { name: 'Thịt ba rọi (ba chỉ)', amount: '400g (rửa sạch, cắt miếng vừa ăn)' },
    { name: 'Dứa (thơm)', amount: '1/2 quả (gọt vỏ, bỏ mắt, cắt lát vừa)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm ngon', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh (để thắng màu)' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Ớt (tuỳ chọn)', amount: '1–2 trái (cắt lát)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Ướp thịt với nước mắm, tỏi, hành tím và tiêu trong 15–20 phút cho thấm gia vị.',
    'Bắc nồi, cho đường vào thắng đến khi đường chuyển màu cánh gián, cho ít nước vào để làm nước màu.',
    'Cho thịt đã ướp vào nồi, đảo đều cho săn lại và thấm màu đẹp.',
    'Thêm dứa vào, tiếp tục đảo nhẹ tay để dứa không bị nát.',
    'Châm nước lọc vào, đun sôi rồi hạ lửa nhỏ, kho liu riu khoảng 20–30 phút đến khi thịt mềm và nước sánh lại.',
    'Nêm nếm lại cho vừa miệng, rắc tiêu và ớt lên trên trước khi tắt bếp.'
  ],
  notes: 'Thịt kho dứa ngon nhất khi ăn cùng cơm trắng nóng. Có thể thay dứa bằng thơm chín vừa để món ăn giữ được vị chua nhẹ và mùi thơm đặc trưng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oeFMPZlRXL4" title="Cách làm thịt kho dứa chua ngọt đưa cơm | Braised Pork with Pineapple Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-kho-nghe',
  name: 'Thịt kho nghệ',
  category: ['Món thịt heo', 'Món mặn'],
  image: 'images/60.jpg',
  description: 'Thịt kho nghệ – món ăn truyền thống miền Trung với màu vàng óng đẹp mắt, mùi thơm đặc trưng của nghệ tươi quyện trong vị mặn mà của nước kho. Thịt mềm, đậm vị, ăn kèm cơm trắng hay cháo trắng đều rất ngon và bổ dưỡng.',
  ingredients: [
    { name: 'Thịt ba rọi (ba chỉ)', amount: '400g (rửa sạch, cắt miếng vừa ăn)' },
    { name: 'Nghệ tươi', amount: '1 củ nhỏ (gọt vỏ, giã hoặc băm nhuyễn)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm ngon', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '1/2 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Ớt (tuỳ chọn)', amount: '1–2 trái (cắt lát)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Rửa sạch thịt, cắt miếng vừa ăn rồi ướp với nước mắm, tỏi, hành tím, nghệ băm, đường, tiêu trong 20 phút cho thấm vị.',
    'Đun nóng nồi với chút dầu ăn, cho phần thịt đã ướp vào đảo đều cho săn lại và dậy mùi thơm của nghệ.',
    'Châm nước lọc vào nồi, đun sôi rồi hạ nhỏ lửa, kho liu riu khoảng 25–30 phút cho thịt mềm và nước sánh lại.',
    'Nêm nếm lại cho vừa miệng, thêm ớt lát nếu thích vị cay. Tắt bếp, rắc thêm tiêu xay lên trên.'
  ],
  notes: 'Thịt kho nghệ thường được dùng chung với cơm nóng hoặc cháo trắng. Nghệ không chỉ tạo màu đẹp mà còn giúp kháng viêm, rất tốt cho sức khỏe. Có thể thêm trứng cút hoặc thịt nạc dăm tùy sở thích.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LbYpGe1uP5M" title="Cách làm thịt kho nghệ đậm đà, chuẩn vị miền Trung | Braised Pork with Turmeric Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-ba-chi-chien-gion',
  name: 'Thịt ba chỉ chiên giòn',
  category: ['Món chiên', 'Món thịt heo'],
  image: 'images/61.jpg',
  description: 'Thịt ba chỉ chiên giòn – món ăn vàng ruộm, giòn tan bên ngoài nhưng vẫn mềm ngọt bên trong. Lớp da nổ giòn rụm, mỡ béo vừa phải, thịt đậm vị mặn mà, chấm cùng nước mắm tỏi ớt là “hết sảy” cho bữa cơm gia đình.',
  ingredients: [
    { name: 'Thịt ba rọi (ba chỉ)', amount: '500g (chọn miếng da mỏng, thịt đều nạc và mỡ)' },
    { name: 'Muối hột', amount: '1 muỗng canh' },
    { name: 'Giấm ăn', amount: '2 muỗng canh' },
    { name: 'Bột nở (baking soda, tùy chọn)', amount: '1/2 muỗng cà phê (giúp da nổ giòn hơn)' },
    { name: 'Gia vị ướp', amount: 'nước mắm, tiêu, tỏi băm, đường, hạt nêm' },
    { name: 'Dầu ăn', amount: 'vừa đủ để chiên ngập thịt' }
  ],
  steps: [
    'Rửa sạch thịt, trụng sơ với nước sôi khoảng 3 phút để khử mùi, sau đó vớt ra để ráo.',
    'Dùng nĩa xăm đều mặt da thịt, rồi chà muối hột và phết giấm (và chút bột nở nếu dùng) lên phần da, để khô khoảng 30 phút.',
    'Lật mặt thịt (phần thịt, không phải da), ướp với nước mắm, tiêu, tỏi băm, đường, hạt nêm trong 20–30 phút.',
    'Đun sôi thịt trong nồi (da hướng lên trên) khoảng 15 phút cho phần da chín nhưng vẫn khô. Lấy ra để nguội, thấm khô da hoàn toàn.',
    'Bắc chảo dầu, cho thịt vào chiên với lửa vừa đến khi vàng đều hai mặt. Khi da bắt đầu nổ giòn, giảm nhỏ lửa để tránh cháy.',
    'Vớt ra, để ráo dầu, cắt lát mỏng và thưởng thức cùng nước mắm tỏi ớt hoặc muối tiêu chanh.'
  ],
  notes: 'Muốn da nổ giòn đẹp, cần để phần da thật khô trước khi chiên. Có thể dùng nồi chiên không dầu để giảm bớt dầu mỡ mà vẫn giữ độ giòn hấp dẫn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mK3EQZt_PfU" title="Cách làm thịt ba chỉ chiên giòn bì nổ rụm, ngon chuẩn nhà hàng | Crispy Pork Belly Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'suon-chien-sa-ot',
  name: 'Sườn chiên sả ớt',
  category: ['Món chiên', 'Món thịt heo'],
  image: 'images/62.jpg',
  description: 'Sườn chiên sả ớt – món ăn đậm đà hương vị miền quê, thơm lừng mùi sả, cay nhẹ vị ớt, miếng sườn vàng giòn bên ngoài, mềm ngọt bên trong. Một món “hao cơm” khó cưỡng cho những ngày muốn đổi vị bữa ăn gia đình.',
  ingredients: [
    { name: 'Sườn non', amount: '500g (rửa sạch, chặt miếng vừa ăn)' },
    { name: 'Sả cây', amount: '3 cây (băm nhuyễn)' },
    { name: 'Ớt tươi', amount: '2–3 trái (băm nhỏ, tuỳ khẩu vị)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Nước mắm ngon', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: 'vừa đủ để chiên' }
  ],
  steps: [
    'Rửa sạch sườn, chần qua nước sôi khoảng 3 phút để loại bỏ mùi hôi và bọt bẩn, sau đó để ráo.',
    'Ướp sườn với nước mắm, đường, hạt nêm, tiêu, tỏi băm, sả và ớt trong ít nhất 30 phút cho thấm đều gia vị.',
    'Bắc chảo, cho dầu ăn vào đun nóng. Cho sườn vào chiên với lửa vừa đến khi vàng đều hai mặt.',
    'Khi sườn gần chín, cho phần sả ớt còn lại vào đảo chung đến khi vàng thơm và sườn lên màu đẹp.',
    'Vớt ra, để ráo dầu. Dọn ra dĩa, rắc thêm sả ớt chiên giòn lên trên cho hấp dẫn.'
  ],
  notes: 'Mẹo hay: nên dùng sườn non có chút mỡ để khi chiên không bị khô. Có thể dùng nồi chiên không dầu, chiên ở 180°C trong 15–20 phút, lật giữa chừng cho vàng đều.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/g7QGczz4jmw" title="Cách làm sườn chiên sả ớt thơm ngon, giòn rụm, đưa cơm | Fried Pork Ribs with Lemongrass and Chili Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-bam-xao-la-que',
  name: 'Thịt bằm xào lá quế',
  category: ['Món thịt heo', 'Món xào',],
  image: 'images/63.jpg',
  description: 'Thịt bằm xào lá quế – món ăn đơn giản nhưng “gây thương nhớ” bởi hương thơm đặc trưng của lá quế quyện trong vị đậm đà, cay nhẹ của thịt bằm. Món này ăn cùng cơm trắng hay chan với bún, trứng ốp la đều ngon khó cưỡng.',
  ingredients: [
    { name: 'Thịt heo bằm (nạc vai hoặc nạc dăm)', amount: '300g' },
    { name: 'Lá quế tươi', amount: '1 nắm nhỏ (rửa sạch, để ráo)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Ớt tươi', amount: '1–2 trái (băm nhỏ, tuỳ khẩu vị)' },
    { name: 'Nước mắm ngon', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Dầu hào', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' }
  ],
  steps: [
    'Làm nóng chảo với dầu ăn, cho tỏi và ớt vào phi thơm.',
    'Cho thịt bằm vào xào tơi, đảo đều tay đến khi thịt săn lại và dậy mùi thơm.',
    'Nêm nước mắm, đường, hạt nêm, dầu hào và tiêu. Xào đều cho thịt ngấm gia vị.',
    'Khi thịt gần chín, cho lá quế vào đảo nhanh tay trên lửa lớn khoảng 30 giây – 1 phút để giữ mùi thơm đặc trưng.',
    'Tắt bếp, dọn ra dĩa, ăn nóng cùng cơm trắng hoặc trứng ốp la là chuẩn vị.'
  ],
  notes: 'Mẹo nhỏ: có thể thay thịt heo bằng thịt bò bằm để món ăn có hương vị kiểu Thái. Lá quế cho vào sau cùng để giữ mùi thơm tự nhiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MpwnUV7hYd4" title="Cách làm thịt bằm xào lá quế thơm ngon, cay nhẹ, hao cơm | Stir-fried Minced Pork with Basil Leaves Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-luoc-mam-tom',
  name: 'Thịt luộc chấm mắm tôm',
  category: ['Món thịt heo'],
  image: 'images/64.jpg',
  description: 'Thịt luộc chấm mắm tôm – món ăn dân dã, đơn giản nhưng đậm đà hồn quê Việt. Miếng thịt ba chỉ luộc chín tới, mềm ngọt, xen chút béo nhẹ, chấm cùng chén mắm tôm dậy mùi, thêm chút chanh, ớt, sả, tỏi – vừa đậm vị, vừa “hao cơm” đến lạ.',
  ingredients: [
    { name: 'Thịt ba rọi (ba chỉ)', amount: '500g (chọn miếng thịt có cả nạc và mỡ, phần da mỏng)' },
    { name: 'Sả cây', amount: '2 cây (đập dập, cho vào luộc cùng)' },
    { name: 'Gừng tươi', amount: '1 nhánh nhỏ (đập dập)' },
    { name: 'Muối hột', amount: '1 muỗng cà phê' },
    { name: 'Mắm tôm ngon', amount: '2 muỗng canh' },
    { name: 'Chanh hoặc tắc', amount: '1 quả (vắt lấy nước cốt)' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Ớt tươi', amount: '1 trái (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhuyễn)' },
    { name: 'Dầu ăn hoặc mỡ hành', amount: '1 muỗng cà phê (giúp mắm tôm thơm béo hơn)' }
  ],
  steps: [
    'Rửa sạch thịt ba chỉ, cho vào nồi cùng sả, gừng và muối hột. Đổ nước ngập mặt thịt và luộc khoảng 20–25 phút cho chín tới.',
    'Khi thịt chín, vớt ra ngâm vào nước lạnh vài phút để thịt săn, cắt lát mỏng vừa ăn.',
    'Pha mắm tôm: cho mắm tôm, đường, nước cốt chanh, tỏi, ớt và chút dầu ăn vào chén, khuấy đều tay cho nổi bọt.',
    'Bày thịt luộc ra dĩa, ăn kèm với chén mắm tôm pha chua cay mặn ngọt và ít rau sống, dưa leo.'
  ],
  notes: 'Có thể thêm vài giọt rượu trắng khi luộc để thịt thơm hơn. Mắm tôm ngon nên chọn loại sánh, có màu tím nhạt tự nhiên và không quá mặn. Món này ăn kèm bún hoặc cơm trắng đều hợp.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JFxYczVQDEk" title="Cách làm thịt luộc chấm mắm tôm ngon đúng điệu | Boiled Pork with Shrimp Paste Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-heo-nuong-chao',
  name: 'Thịt heo nướng chao',
  category: ['Món thịt heo', 'Món nướng', 'Món mặn'],
  image: 'images/65.jpg',
  description: 'Thịt heo nướng chao – món nướng thơm nức mũi với hương vị đặc trưng từ chao đỏ béo ngậy, mằn mặn xen chút ngọt cay. Thịt nướng xém cạnh, mềm mọng bên trong, ăn cùng cơm, bún hay rau sống cuốn bánh tráng đều tuyệt vời.',
  ingredients: [
    { name: 'Thịt heo (ba rọi hoặc nạc vai)', amount: '500g (rửa sạch, cắt miếng vừa ăn hoặc lát mỏng để nướng)' },
    { name: 'Chao đỏ', amount: '2 viên (nghiền nhuyễn)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Sả cây', amount: '2 cây (băm nhuyễn)' },
    { name: 'Ớt tươi', amount: '1 trái (băm nhỏ, tuỳ khẩu vị)' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm ngon', amount: '1 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh (giúp thịt mềm, không khô khi nướng)' }
  ],
  steps: [
    'Cho chao, tỏi, sả, ớt, đường, nước mắm, dầu hào, tiêu và dầu ăn vào tô, khuấy đều tạo hỗn hợp ướp.',
    'Cho thịt heo vào tô ướp, trộn đều cho thấm gia vị. Đậy kín và để trong ngăn mát tủ lạnh ít nhất 1–2 tiếng (hoặc qua đêm càng ngon).',
    'Làm nóng bếp than, bếp điện hoặc chảo nướng. Nướng thịt đến khi chín vàng đều hai mặt, dậy mùi thơm của chao và sả.',
    'Khi thịt chín, cắt nhỏ, dọn ra dĩa, ăn kèm rau sống, dưa leo và chấm nước mắm chua ngọt hoặc tương ớt.'
  ],
  notes: 'Nếu dùng lò nướng, nướng ở 180°C trong 20 phút, sau đó trở mặt và nướng thêm 10 phút cho vàng đều. Có thể thêm một ít sữa đặc hoặc mật ong vào phần ướp để thịt lên màu đẹp và bóng bẩy hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Br_sCPLXq20" title="Cách làm thịt heo nướng chao thơm ngon, đậm đà hương vị | Grilled Pork with Fermented Bean Curd Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-kho-qua-nhoi-thit',
  name: 'Canh khổ qua nhồi thịt',
  category: ['Món canh', 'Món thịt heo'],
  image: 'images/18.jpg',
  description: 'Canh khổ qua nhồi thịt – món ăn thanh mát, đậm vị quê nhà. Khổ qua được nhồi thịt heo xay trộn nấm mèo, hành tím rồi hầm đến khi mềm. Nước dùng ngọt thanh, vị đắng nhẹ hòa cùng vị béo của thịt, ăn cùng cơm nóng cực đưa cơm.',
  ingredients: [
    { name: 'Khổ qua (mướp đắng)', amount: '3–4 trái (rửa sạch, cắt khúc, bỏ ruột)' },
    { name: 'Thịt heo xay', amount: '200g' },
    { name: 'Nấm mèo khô', amount: '2 tai (ngâm nở, băm nhỏ)' },
    { name: 'Miến khô', amount: '20g (ngâm mềm, cắt nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Nước mắm, hạt nêm, tiêu, đường', amount: 'vừa đủ để ướp và nêm nếm' },
    { name: 'Nước lọc', amount: 'khoảng 1 lít' }
  ],
  steps: [
    'Trộn thịt heo xay với nấm mèo, miến, hành tím, hành lá, nêm nước mắm, tiêu và hạt nêm cho vừa miệng.',
    'Nhồi hỗn hợp thịt vào lòng khổ qua, ép nhẹ tay cho chắc.',
    'Đun sôi nước, cho khổ qua vào nồi, hầm nhỏ lửa khoảng 25–30 phút cho đến khi khổ qua mềm và nước trong.',
    'Nêm lại gia vị cho vừa miệng, thêm chút hành lá lên mặt.',
    'Múc ra tô, dùng nóng cùng cơm trắng.'
  ],
  notes: 'Có thể cho thêm tôm băm vào phần nhân để tăng vị ngọt tự nhiên. Món này ngon hơn khi nấu sớm cho khổ qua thấm đều gia vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MH7N1oXjFZs" title="Cách nấu canh khổ qua nhồi thịt ngon, không đắng, thanh mát | Bitter Melon Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-chua-thit-bam',
  name: 'Canh chua thịt băm',
  category: ['Món canh', 'Món thịt heo'],
  image: 'images/66.jpg',
  description: 'Canh chua thịt băm – món ăn dân dã, dễ nấu mà đưa cơm vô cùng. Nước canh chua thanh từ cà chua và me, hòa quyện cùng vị ngọt của thịt băm, thêm chút thơm và rau thơm tạo nên hương vị đậm đà, dễ ăn cho cả nhà.',
  ingredients: [
    { name: 'Thịt heo băm', amount: '200g' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Thơm (dứa)', amount: '1/4 quả (cắt lát mỏng)' },
    { name: 'Me chua (hoặc nước cốt me)', amount: '1 muỗng canh (điều chỉnh tùy khẩu vị)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Hành lá, rau ngổ, ngò om', amount: 'vừa đủ (rửa sạch, cắt nhỏ)' },
    { name: 'Nước lọc', amount: 'khoảng 1 lít' },
    { name: 'Gia vị', amount: 'muối, đường, hạt nêm, nước mắm, tiêu' }
  ],
  steps: [
    'Phi thơm hành tím trong nồi với chút dầu ăn, cho thịt băm vào xào săn, nêm nhẹ muối và hạt nêm.',
    'Thêm cà chua và thơm vào xào cùng cho ra màu đẹp và vị chua ngọt tự nhiên.',
    'Đổ nước lọc vào nồi, đun sôi rồi cho nước cốt me vào, nêm lại gia vị cho vừa miệng.',
    'Khi nước sôi lại, cho hành lá, rau ngổ, ngò om vào rồi tắt bếp.',
    'Múc canh ra tô, rắc thêm ít tiêu xay, dùng nóng cùng cơm trắng.'
  ],
  notes: 'Có thể thêm đậu bắp, bạc hà hoặc giá đỗ để món canh thêm phong phú. Nếu thích vị cay, thêm vài lát ớt sẽ rất ngon.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vrAkxN2yAhQ" title="Cách nấu canh chua thịt băm ngon, dễ làm, đậm đà hương vị quê nhà | Sour Soup with Minced Pork" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'dau-hu-thit-bam',
  name: 'Đậu hũ thịt bằm',
  category: ['Món mặn', 'Món thịt heo','Món xào'],
  image: 'images/39.jpg',
  description: 'Đậu hũ thịt bằm – món ăn quen thuộc trong bữa cơm Việt. Miếng đậu hũ mềm mịn, thấm đều nước sốt đậm đà từ thịt bằm, hành tỏi phi thơm. Món này đơn giản, nhanh gọn mà cực kỳ hao cơm.',
  ingredients: [
    { name: 'Đậu hũ trắng', amount: '3 miếng (cắt khối vuông nhỏ)' },
    { name: 'Thịt heo bằm', amount: '200g' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Nước mắm, hạt nêm, đường, tiêu', amount: 'vừa đủ' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước lọc hoặc nước dùng', amount: '100ml' }
  ],
  steps: [
    'Đun nóng chảo với dầu ăn, cho hành tím và tỏi vào phi thơm.',
    'Cho thịt bằm vào xào săn, nêm nước mắm, hạt nêm và đường cho vừa miệng.',
    'Thêm đậu hũ vào chảo, nhẹ tay đảo để đậu không bị nát.',
    'Cho thêm ít nước hoặc nước dùng, rim nhỏ lửa 5–7 phút cho đậu thấm đều gia vị.',
    'Rắc hành lá, tiêu xay lên trên rồi tắt bếp. Dọn ra đĩa, dùng nóng cùng cơm trắng.'
  ],
  notes: 'Có thể thêm ít tương ớt hoặc sa tế để tăng hương vị. Nếu thích mềm hơn, dùng đậu hũ non thay cho đậu hũ thường.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xvC2J6saUf4" title="Cách làm đậu hũ thịt bằm rim mặn ngọt cực ngon, hao cơm | Tofu with Minced Pork Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-heo-xao-dau-que',
  name: 'Thịt heo xào đậu que',
  category: ['Món xào', 'Món thịt heo', 'Món rau củ'],
  image: 'images/14.jpg',
  description: 'Thịt heo xào đậu que – món ăn giản dị mà tròn vị. Thịt heo mềm, đậm đà hòa cùng vị ngọt giòn của đậu que, tạo nên món xào ngon miệng, dễ ăn và cực kỳ bắt cơm.',
  ingredients: [
    { name: 'Thịt heo (ba chỉ hoặc nạc dăm)', amount: '200g (cắt lát mỏng)' },
    { name: 'Đậu que', amount: '200g (tỉa đầu, cắt khúc vừa ăn)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Nước mắm, hạt nêm, đường, tiêu, dầu hào', amount: 'vừa đủ' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Luộc sơ đậu que trong nước sôi có chút muối khoảng 2 phút, sau đó vớt ra cho vào nước lạnh để giữ màu xanh giòn.',
    'Bắc chảo, phi thơm hành tỏi với dầu ăn rồi cho thịt heo vào xào săn.',
    'Nêm nước mắm, dầu hào, hạt nêm, đường và tiêu cho vừa miệng.',
    'Cho đậu que vào xào cùng, đảo nhanh tay trên lửa lớn 3–5 phút cho thấm gia vị.',
    'Nêm nếm lại, rắc thêm ít tiêu xay rồi tắt bếp. Dọn ra đĩa, dùng nóng cùng cơm trắng.'
  ],
  notes: 'Có thể thêm ớt chuông hoặc cà rốt cắt sợi để món ăn thêm màu sắc. Nên xào nhanh tay để đậu que giữ độ giòn và xanh tươi.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3hl6cldZFeE" title="Cách làm thịt heo xào đậu que giòn ngọt, đơn giản mà ngon cơm | Stir-fried Pork with Green Beans" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'suon-non-kho-tieu',
  name: 'Sườn non kho tiêu',
  category: ['Món thịt heo', 'Món mặn'],
  image: 'images/38.jpg',
  description: 'Sườn non kho tiêu – món ăn đậm đà, cay nhẹ và thơm nức mùi tiêu. Từng miếng sườn mềm thấm đều nước kho mặn ngọt, beo béo, rất đưa cơm, đặc biệt là trong những ngày trời se lạnh.',
  ingredients: [
    { name: 'Sườn non heo', amount: '400g (chặt khúc vừa ăn)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1 muỗng cà phê (tùy khẩu vị có thể cho nhiều hơn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước màu (hoặc đường thắng)', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Rửa sạch sườn non, trụng qua nước sôi cho sạch bọt, sau đó để ráo.',
    'Ướp sườn với nước mắm, đường, hạt nêm, tiêu và tỏi hành băm trong 20–30 phút cho thấm.',
    'Bắc nồi, cho chút dầu ăn và nước màu vào, thắng cho sôi nhẹ rồi cho sườn vào đảo đều cho săn và lên màu đẹp.',
    'Thêm nước lọc vào, đậy nắp, kho lửa nhỏ trong khoảng 20–25 phút cho sườn mềm và nước sệt lại.',
    'Rắc thêm tiêu xay, đảo nhẹ rồi tắt bếp. Dọn ra đĩa, ăn cùng cơm trắng nóng hổi.'
  ],
  notes: 'Có thể cho thêm vài lát ớt tươi nếu thích vị cay nồng hơn. Khi kho, nên để lửa nhỏ để sườn thấm đều và không bị khô.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_gEGL3bSHUo" title="Cách làm sườn non kho tiêu thơm ngon, đậm đà chuẩn cơm nhà | Braised Pork Ribs with Pepper Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-cai-thit-bam',
  name: 'Canh cải thịt bằm',
  category: ['Món canh', 'Món thịt heo'],
  image: 'images/17.jpg',
  description: 'Canh cải thịt bằm – món canh thanh mát, dễ nấu và rất hợp cho bữa cơm gia đình. Thịt bằm ngọt mềm hòa trong nước canh trong veo, rau cải xanh tươi giòn nhẹ, mang đến hương vị giản dị mà ngon miệng.',
  ingredients: [
    { name: 'Thịt heo bằm', amount: '200g' },
    { name: 'Rau cải xanh (hoặc cải ngọt)', amount: '300g (rửa sạch, cắt khúc vừa ăn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước lọc', amount: 'khoảng 1 lít' },
    { name: 'Nước mắm, hạt nêm, muối, tiêu', amount: 'vừa đủ' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ, dùng trang trí)' }
  ],
  steps: [
    'Phi thơm hành tím với dầu ăn trong nồi.',
    'Cho thịt bằm vào xào săn, nêm chút nước mắm và hạt nêm cho thấm vị.',
    'Đổ nước lọc vào nồi, đun sôi rồi hớt bọt cho nước canh trong.',
    'Khi nước sôi lại, cho rau cải vào, nấu chín vừa tới để rau giữ độ xanh và giòn.',
    'Nêm nếm lại cho vừa miệng, rắc hành lá và tiêu lên trên rồi tắt bếp. Dọn ra tô, dùng nóng.'
  ],
  notes: 'Không nên nấu rau quá lâu để tránh bị nhũn và ra nước xanh. Có thể thêm ít gừng cắt sợi để tăng hương vị ấm nhẹ cho món canh.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jP7b1vR_1R0" title="Cách nấu canh cải thịt bằm thanh mát, dễ nấu, ngon cơm | Minced Pork with Mustard Greens Soup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-kho-dua-cai-chua',
  name: 'Thịt kho dưa cải chua',
  category: ['Món thịt heo', 'Món mặn'],
  image: 'images/40.jpg',
  description: 'Thịt kho dưa cải chua – món ăn dân dã đậm vị cơm nhà. Thịt ba chỉ béo mềm thấm vị mặn ngọt, kết hợp cùng dưa cải chua giòn giòn tạo nên hương vị hài hòa, ăn mãi không ngán.',
  ingredients: [
    { name: 'Thịt ba chỉ heo', amount: '400g (rửa sạch, cắt miếng vừa ăn)' },
    { name: 'Dưa cải chua', amount: '300g (rửa sơ, vắt ráo nước, cắt khúc)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước lọc hoặc nước dưa chua', amount: '100ml' }
  ],
  steps: [
    'Bắc chảo, phi thơm hành tỏi với dầu ăn.',
    'Cho thịt ba chỉ vào xào săn, nêm nước mắm, đường, hạt nêm cho vừa miệng.',
    'Thêm dưa cải chua vào đảo đều cùng thịt cho thấm vị.',
    'Cho nước lọc hoặc nước dưa chua vào, kho lửa nhỏ 20–25 phút đến khi thịt mềm và nước sệt lại.',
    'Rắc tiêu xay, đảo đều rồi tắt bếp. Dọn ra đĩa, dùng nóng với cơm trắng.'
  ],
  notes: 'Có thể thêm vài lát ớt tươi để món ăn dậy mùi và có vị cay nhẹ. Nên chọn dưa cải vàng tươi, không quá chua để hương vị hài hòa nhất.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/q8qwv5Ew3Fs" title="Cách làm thịt kho dưa cải chua ngon cơm, đậm đà chuẩn vị | Braised Pork with Pickled Mustard Greens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-xao-hanh-tay',
  name: 'Thịt xào hành tây',
  category: ['Món thịt heo', 'Món xào'],
  image: 'images/41.jpg',
  description: 'Thịt xào hành tây – món ăn nhanh gọn, đậm đà và thơm nức mũi. Thịt heo mềm ngọt hòa quyện cùng hành tây giòn ngọt tự nhiên, thêm chút tiêu cay nhẹ, ăn với cơm nóng thì ngon hết sẩy.',
  ingredients: [
    { name: 'Thịt heo (nạc dăm hoặc thăn)', amount: '300g (cắt lát mỏng)' },
    { name: 'Hành tây', amount: '1 củ lớn (bổ múi cau)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Ướp thịt heo với nước mắm, hạt nêm, đường, dầu hào, tiêu và tỏi hành băm trong 15–20 phút cho thấm gia vị.',
    'Bắc chảo, cho dầu ăn vào phi thơm tỏi, hành tím rồi cho thịt vào xào lửa lớn cho săn.',
    'Khi thịt gần chín, cho hành tây vào đảo nhanh tay để hành giữ được độ giòn và mùi thơm.',
    'Nêm nếm lại cho vừa miệng, rắc thêm chút tiêu xay rồi tắt bếp.',
    'Dọn ra đĩa, ăn nóng cùng cơm trắng hoặc dùng kèm cơm chiên đều ngon.'
  ],
  notes: 'Có thể thêm ớt chuông hoặc hành lá để món ăn thêm màu sắc và hương vị. Xào nhanh tay trên lửa lớn giúp thịt mềm và hành tây không bị ra nước.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/fC-jHpw72mE" title="Cách làm thịt xào hành tây thơm ngon, mềm ngọt, chuẩn cơm nhà | Stir-fried Pork with Onions Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cha-gio-thit-heo',
  name: 'Chả giò thịt heo',
  category: ['Món chiên', 'Món thịt heo'],
  image: 'images/33.jpg',
  description: 'Chả giò thịt heo giòn rụm, nhân thịt heo bằm quyện cùng miến, nấm mèo, cà rốt và hành tây. Cuốn chả được chiên vàng ruộm, thơm phức, chấm cùng nước mắm tỏi ớt chua ngọt là chuẩn vị món ngon truyền thống trong mọi bữa cơm Việt.',
  ingredients: [
    { name: 'Bánh tráng', amount: '10–12 tờ' },
    { name: 'Thịt heo bằm', amount: '200g' },
    { name: 'Miến', amount: '50g (ngâm mềm, cắt nhỏ)' },
    { name: 'Mộc nhĩ', amount: '5–6 tai (ngâm nở, băm nhỏ)' },
    { name: 'Cà rốt', amount: '1/2 củ (bào sợi nhỏ)' },
    { name: 'Hành tây', amount: '1/4 củ (băm nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: 'đủ để chiên' }
  ],
  steps: [
    'Ngâm miến và mộc nhĩ cho mềm, băm nhỏ. Cà rốt, hành tây thái sợi nhỏ.',
    'Trộn thịt bằm với miến, mộc nhĩ, cà rốt, hành tây, hành tím, tỏi, nêm nước mắm, đường, hạt nêm, tiêu xay cho đều.',
    'Đặt bánh tráng, cho nhân vào giữa, cuộn gọn và gấp 2 đầu để tránh nhân rơi ra.',
    'Đun nóng dầu trong chảo, chiên chả giò lửa vừa đến khi vàng giòn đều các mặt.',
    'Vớt ra để ráo dầu, dọn ra đĩa, ăn kèm rau sống và nước mắm chua ngọt.'
  ],
  notes: 'Chiên vừa lửa để chả giòn bên ngoài mà nhân bên trong vẫn mềm. Có thể thêm ít ớt băm vào nhân để tăng vị cay nhẹ.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Nw5M9K1qfJk" title="Cách làm chả giò thịt heo giòn rụm, ngon chuẩn vị Việt | Vietnamese Fried Spring Rolls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bun-thit-nuong',
  name: 'Bún thịt nướng',
  category: ['Ăn sáng', 'Món thịt heo'],
  image: 'images/27.jpg',
  description: 'Bún thịt nướng – món ăn đặc trưng miền Nam với thịt heo nướng thơm lừng, bún tươi mát, rau sống giòn rụm và nước mắm tỏi ớt chua ngọt hấp dẫn. Mỗi tô bún là sự hòa quyện của hương khói, vị đậm đà và cảm giác tươi mới khó cưỡng.',
  ingredients: [
    { name: 'Thịt heo (ba chỉ hoặc nạc vai)', amount: '400g (thái lát mỏng)' },
    { name: 'Sả băm', amount: '2 muỗng canh' },
    { name: 'Tỏi băm', amount: '1 muỗng canh' },
    { name: 'Hành tím băm', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Ngũ vị hương', amount: '1/2 muỗng cà phê (tùy thích)' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Bún tươi', amount: '500g' },
    { name: 'Rau sống (xà lách, giá, dưa leo, rau thơm)', amount: 'tùy thích' },
    { name: 'Đậu phộng rang giã dập', amount: '2 muỗng canh' },
    { name: 'Hành phi', amount: '1 muỗng canh' },
    { name: 'Nước mắm chua ngọt', amount: 'vừa ăn (pha sẵn)' }
  ],
  steps: [
    'Ướp thịt heo với sả, tỏi, hành tím, nước mắm, đường, dầu hào, tiêu và dầu ăn trong ít nhất 30 phút (càng lâu càng ngon).',
    'Nướng thịt trên bếp than, lò nướng hoặc chảo chống dính cho đến khi thịt vàng, thơm và xém cạnh.',
    'Chuẩn bị tô bún: cho bún tươi, rau sống, dưa leo, giá vào tô.',
    'Xếp thịt nướng lên trên, rắc thêm đậu phộng rang và hành phi.',
    'Chan nước mắm chua ngọt vừa ăn, trộn đều trước khi thưởng thức.'
  ],
  notes: 'Có thể thêm chả giò hoặc nem nướng để món ăn phong phú hơn. Nếu không có bếp nướng, có thể áp chảo thịt bằng chảo gang vẫn rất ngon.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YJ5GoVd-QLI" title="Cách làm bún thịt nướng chuẩn vị, thịt mềm thơm đậm đà | Grilled Pork Vermicelli Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-nuong-muoi-ot',
  name: 'Gà nướng muối ớt',
  category: ['Món nướng', 'Món thịt gà'],
  image: 'images/67.jpg',
  description: 'Gà nướng muối ớt – món nướng thơm nức mũi, vị cay mặn đậm đà hòa quyện trong từng thớ thịt gà mềm mọng. Món này cực hợp để ăn cùng cơm trắng, xôi hoặc nhâm nhi trong các buổi tụ họp cuối tuần.',
  ingredients: [
    { name: 'Gà ta hoặc gà công nghiệp', amount: '1 con (khoảng 1.2–1.5kg, làm sạch)' },
    { name: 'Muối hột', amount: '1 muỗng canh' },
    { name: 'Ớt tươi', amount: '2–3 trái (băm nhuyễn)' },
    { name: 'Tỏi', amount: '4 tép (băm nhuyễn)' },
    { name: 'Sả băm', amount: '2 muỗng canh' },
    { name: 'Dầu điều', amount: '1 muỗng canh (tạo màu đẹp)' },
    { name: 'Mật ong', amount: '1 muỗng canh (giúp da gà bóng đẹp)' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Trộn muối, ớt, tỏi, sả, đường, nước mắm, dầu điều, mật ong và tiêu xay thành hỗn hợp ướp.',
    'Ướp đều hỗn hợp lên toàn bộ con gà (cả bên trong lẫn bên ngoài), để thấm ít nhất 1 giờ hoặc qua đêm trong tủ lạnh cho ngon.',
    'Làm nóng lò nướng ở 200°C, cho gà vào nướng khoảng 45–60 phút, thỉnh thoảng phết lại hỗn hợp ướp cho da gà bóng đẹp và không bị khô.',
    'Khi gà vàng đều, thơm phức thì lấy ra, chặt miếng vừa ăn.',
    'Dọn kèm muối ớt chanh hoặc muối tiêu chanh để chấm thêm phần đậm đà.'
  ],
  notes: 'Có thể thay lò nướng bằng bếp than để gà có hương vị khói đặc trưng. Khi nướng nhớ trở đều tay để gà chín vàng đều và không bị cháy.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3fRZc5KQyIY" title="Cách làm gà nướng muối ớt thơm ngon chuẩn vị | Grilled Chicken with Chili Salt Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-chien-nuoc-mam',
  name: 'Gà chiên nước mắm',
  category: ['Món chiên', 'Món thịt gà'],
  image: 'images/30.jpg',
  description: 'Gà chiên nước mắm – món ăn “quốc dân” với lớp da vàng giòn rụm, thịt gà thấm vị mặn ngọt đậm đà. Mùi thơm quyến rũ của nước mắm hòa cùng tỏi phi khiến ai cũng khó lòng cưỡng lại.',
  ingredients: [
    { name: 'Cánh gà (hoặc đùi gà)', amount: '500g (rửa sạch, thấm khô)' },
    { name: 'Tỏi', amount: '4 tép (băm nhuyễn)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '1 muỗng canh' },
    { name: 'Bột chiên giòn (hoặc bột năng)', amount: '2 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: 'đủ để chiên ngập gà' }
  ],
  steps: [
    'Ướp gà với tiêu và ít muối trong 15 phút cho thấm nhẹ.',
    'Áo gà qua một lớp bột chiên giòn mỏng, giúp da giòn khi chiên.',
    'Đun nóng dầu, cho gà vào chiên vàng giòn đều hai mặt rồi vớt ra, để ráo dầu.',
    'Pha hỗn hợp nước mắm – đường – nước lọc – tỏi băm, khuấy đều.',
    'Cho hỗn hợp này vào chảo, nấu sôi nhẹ đến khi sệt lại thì cho gà chiên vào đảo đều để thấm nước mắm.',
    'Tắt bếp khi gà áo đều lớp nước mắm vàng óng. Dọn ra đĩa, rắc thêm tỏi phi cho thơm.'
  ],
  notes: 'Có thể thêm ớt băm vào nước mắm để tạo vị cay nhẹ. Món này ngon nhất khi ăn nóng, kèm cơm trắng hoặc xôi chiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v0-KSgkTdxg" title="Cách làm gà chiên nước mắm giòn rụm, đậm đà chuẩn vị | Fried Chicken with Fish Sauce Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ga-chien-xu',
  name: 'Cánh gà chiên xù',
  category: ['Món chiên', 'Món thịt gà'],
  image: 'images/68.jpg',
  description: 'Cánh gà chiên xù – món ăn vàng ruộm, giòn tan bên ngoài mà vẫn mềm mọng bên trong. Lớp bột xù bao quanh tạo nên hương vị hấp dẫn, cực kỳ bắt miệng, đặc biệt được trẻ nhỏ yêu thích.',
  ingredients: [
    { name: 'Cánh gà', amount: '500g (rửa sạch, chặt đôi nếu to)' },
    { name: 'Bột mì', amount: '2 muỗng canh' },
    { name: 'Bột chiên xù', amount: '1 chén' },
    { name: 'Trứng gà', amount: '2 quả (đánh tan)' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Dầu ăn', amount: 'đủ để chiên ngập gà' }
  ],
  steps: [
    'Ướp cánh gà với muối, tiêu, tỏi băm và nước mắm trong 20–30 phút cho thấm gia vị.',
    'Lăn cánh gà qua bột mì, nhúng vào trứng, rồi áo đều lớp bột chiên xù bên ngoài.',
    'Đun nóng dầu, cho cánh gà vào chiên ngập dầu ở lửa vừa đến khi vàng giòn đều hai mặt.',
    'Vớt gà ra, để ráo dầu trên giấy thấm.',
    'Dọn ra đĩa, có thể chấm cùng tương ớt, mayonnaise hoặc tương cà tùy khẩu vị.'
  ],
  notes: 'Chiên ở lửa vừa để gà chín đều và giòn lâu. Nếu thích vị cay, có thể thêm chút ớt bột vào bột áo trước khi chiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/IDum6-GjPM0" title="Cách làm cánh gà chiên xù giòn tan, vàng ruộm hấp dẫn | Crispy Fried Chicken Wings Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-rang-muoi',
  name: 'Gà rang muối',
  category: ['Món thịt gà', 'Món mặn'],
  image: 'images/69.jpg',
  description: 'Gà rang muối – món ăn đặc trưng với lớp muối rang giòn thơm, bao quanh từng miếng gà vàng ươm. Gà bên trong mềm ngọt, bên ngoài giòn rụm, mằn mặn cay nhẹ, ăn chơi hay ăn cơm đều ngon hết ý.',
  ingredients: [
    { name: 'Gà ta hoặc gà công nghiệp', amount: '1 con nhỏ (khoảng 1.2kg, chặt miếng vừa ăn)' },
    { name: 'Bột năng', amount: '2 muỗng canh' },
    { name: 'Lòng đỏ trứng gà', amount: '1 quả' },
    { name: 'Muối hột', amount: '2 muỗng canh' },
    { name: 'Gạo nếp', amount: '2 muỗng canh' },
    { name: 'Đậu xanh cà vỏ', amount: '1 muỗng canh' },
    { name: 'Sả', amount: '3 cây (băm nhuyễn)' },
    { name: 'Lá chanh', amount: '5–7 lá (thái sợi)' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: 'đủ để chiên ngập gà' }
  ],
  steps: [
    'Rang riêng gạo nếp, đậu xanh và muối hột đến khi vàng thơm, sau đó xay nhuyễn hỗn hợp này thành “muối rang” đặc trưng.',
    'Ướp thịt gà với nước mắm, tiêu, đường, tỏi băm, sả trong 20–30 phút cho thấm.',
    'Nhúng gà qua lòng đỏ trứng rồi áo lớp bột năng mỏng bên ngoài.',
    'Chiên gà ngập dầu ở lửa vừa cho đến khi vàng giòn, vớt ra để ráo dầu.',
    'Cho sả và lá chanh vào chảo chiên nhanh cho giòn, vớt ra.',
    'Trộn gà đã chiên với hỗn hợp muối rang, sả và lá chanh cho thấm đều.',
    'Dọn ra đĩa, ăn nóng là ngon nhất.'
  ],
  notes: 'Nếu không có thời gian rang muối, có thể mua sẵn gói “muối rang gà” bán tại siêu thị. Gà rang muối ngon nhất khi mới chiên xong, còn nóng và giòn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lc1yDvlvFtw" title="Cách làm gà rang muối giòn rụm thơm ngon chuẩn vị nhà hàng | Salted Fried Chicken Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-chien-xi-dau',
  name: 'Gà chiên xì dầu',
  category: ['Món thịt gà', 'Món mặn'],
  image: 'images/70.jpg',
  description: 'Gà chiên xì dầu – món ăn mang hương vị đậm đà kiểu Á Đông, lớp da vàng óng, giòn nhẹ bên ngoài, thịt bên trong mềm thấm vị nước tương, tỏi và gừng thơm nức mũi.',
  ingredients: [
    { name: 'Đùi gà hoặc cánh gà', amount: '500g (rửa sạch, để ráo)' },
    { name: 'Xì dầu (nước tương)', amount: '3 muỗng canh' },
    { name: 'Tỏi băm', amount: '1 muỗng canh' },
    { name: 'Gừng băm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Bột bắp', amount: '1 muỗng canh (giúp da gà giòn nhẹ)' },
    { name: 'Dầu ăn', amount: 'đủ để chiên' },
    { name: 'Ớt tươi', amount: '1 quả (tùy chọn, thái lát trang trí)' }
  ],
  steps: [
    'Ướp gà với xì dầu, tỏi, gừng, đường, tiêu trong 30 phút cho thấm vị.',
    'Thêm chút bột bắp vào phần gà đã ướp, trộn đều để tạo lớp áo mỏng.',
    'Đun nóng dầu, cho gà vào chiên lửa vừa đến khi vàng đều hai mặt, vớt ra để ráo dầu.',
    'Trong chảo khác, phi thơm chút tỏi, cho phần nước ướp còn lại vào, đun sệt nhẹ.',
    'Cho gà chiên vào đảo đều cho thấm xì dầu, đến khi gà có màu nâu cánh gián đẹp mắt.',
    'Gắp ra đĩa, rắc thêm ít tiêu và ớt trang trí, dùng nóng với cơm trắng.'
  ],
  notes: 'Không chiên lửa lớn quá để gà không cháy bên ngoài mà chưa chín bên trong. Có thể thêm mật ong nếu thích vị ngọt dịu và màu bóng đẹp.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VBOI0qCgP_0" title="Cách làm gà chiên xì dầu thơm ngon đậm đà | Soy Sauce Fried Chicken Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-hap-muoi',
  name: 'Gà hấp muối',
  category: ['Món thịt gà'],
  image: 'images/71.jpg',
  description: 'Gà hấp muối – món ăn giữ trọn vị ngọt tự nhiên của thịt gà, mềm mọng và thơm dịu hương lá chanh, sả. Không cần nước, gà vẫn chín đều, da vàng căng bóng, thịt thơm lừng và đậm đà.',
  ingredients: [
    { name: 'Gà ta nguyên con', amount: '1 con (khoảng 1.2–1.5kg, làm sạch)' },
    { name: 'Muối hột', amount: '1/2 kg' },
    { name: 'Sả cây', amount: '5 cây (đập dập, cắt khúc)' },
    { name: 'Lá chanh', amount: '5–7 lá (thái sợi)' },
    { name: 'Gừng', amount: '1 củ nhỏ (đập dập)' },
    { name: 'Rượu trắng', amount: '2 muỗng canh (khử mùi tanh)' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Rửa sạch gà, thoa đều rượu trắng lên da để khử mùi, để ráo.',
    'Ướp gà với tiêu, hạt nêm, một ít dầu ăn và vài sợi lá chanh trong 30 phút cho thấm.',
    'Lót dưới đáy nồi một lớp muối hột dày khoảng 1cm, rồi xếp sả, gừng, lá chanh lên trên.',
    'Đặt gà lên phần sả, phủ nắp kín và hấp bằng hơi muối trong 40–50 phút ở lửa nhỏ vừa.',
    'Khi gà chín vàng nhẹ, tỏa mùi thơm đặc trưng thì tắt bếp, lấy ra để nguội bớt rồi chặt miếng vừa ăn.',
    'Dọn kèm với muối tiêu chanh hoặc muối ớt xanh là chuẩn vị.'
  ],
  notes: 'Không cần thêm nước khi hấp – hơi nóng từ muối sẽ làm gà chín đều mà không bị khô. Có thể thêm lá chanh hoặc sả nhiều hơn nếu thích hương thơm đậm.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jTD3iIkVZ6E" title="Cách làm gà hấp muối siêu ngon, da vàng thịt ngọt chuẩn vị | Salt Steamed Chicken Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-ham-thuoc-bac',
  name: 'Gà hầm thuốc bắc',
  category: ['Món thịt gà'],
  image: 'images/72.jpg',
  description: 'Gà hầm thuốc bắc – món ăn bổ dưỡng, thơm mùi thảo dược, thịt gà mềm ngọt quyện cùng vị thanh nhẹ của táo tàu, kỷ tử và nhân sâm. Rất thích hợp cho người cần bồi bổ sức khỏe hoặc sau ốm.',
  ingredients: [
    { name: 'Gà ta nguyên con nhỏ', amount: '1 con (~1 - 1.2kg)' },
    { name: 'Thuốc bắc (gói sẵn cho món gà hầm)', amount: '1 gói' },
    { name: 'Táo tàu', amount: '5 - 7 quả' },
    { name: 'Kỷ tử', amount: '1 muỗng canh' },
    { name: 'Nhân sâm hoặc đẳng sâm', amount: '1 nhánh nhỏ (tùy chọn)' },
    { name: 'Nước dừa tươi', amount: '500ml' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu', amount: '1/4 muỗng cà phê' },
    { name: 'Gừng đập dập', amount: '3 lát' }
  ],
  steps: [
    'Gà làm sạch, có thể chặt đôi hoặc để nguyên con tùy sở thích. Trụng sơ qua nước sôi để loại bỏ mùi hôi.',
    'Rửa sạch các vị thuốc bắc, để ráo.',
    'Cho gà vào nồi, thêm thuốc bắc, gừng, táo tàu, kỷ tử và nhân sâm.',
    'Đổ nước dừa tươi ngập mặt gà, nêm nhẹ với muối và tiêu.',
    'Đun sôi, sau đó hạ nhỏ lửa, hầm trong 1 - 1.5 giờ cho đến khi gà mềm, nước dùng chuyển màu vàng nâu và thơm đặc trưng.',
    'Múc ra tô, rắc thêm tiêu, dùng nóng.'
  ],
  notes: 'Nếu dùng nồi áp suất, chỉ cần hầm 25-30 phút. Có thể thêm vài lát ngải cứu nếu thích mùi đặc trưng của món thuốc bắc. Món này ngon nhất khi ăn nóng cùng cơm trắng hoặc mì trứng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5TDaY3Dk2tU" title="Cách làm Gà hầm thuốc bắc bổ dưỡng tại nhà | Herbal Chicken Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-kho-sa-ot',
  name: 'Gà kho sả ớt',
  category: ['Món thịt gà', 'Món mặn'],
  image: 'images/73.jpg',
  description: 'Gà kho sả ớt – món ăn đậm đà, cay thơm, đánh thức vị giác. Thịt gà săn chắc thấm đều gia vị, quyện cùng mùi sả ớt dậy hương, ăn cùng cơm nóng cực kỳ hao cơm.',
  ingredients: [
    { name: 'Thịt gà (đùi hoặc cánh)', amount: '600g (chặt miếng vừa ăn)' },
    { name: 'Sả cây', amount: '3 cây (băm nhỏ)' },
    { name: 'Ớt hiểm', amount: '2 - 3 trái (băm nhỏ)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Rửa sạch thịt gà, để ráo, ướp với nước mắm, đường, hạt nêm, tiêu, sả, ớt, tỏi và hành băm trong 20–30 phút cho thấm.',
    'Bắc chảo, cho dầu ăn vào phi thơm sả, ớt, tỏi, hành tím còn lại.',
    'Cho gà vào xào săn trên lửa lớn cho đến khi thịt săn lại và dậy mùi thơm.',
    'Hạ nhỏ lửa, kho gà trong 15–20 phút cho đến khi nước sệt lại và gà chín mềm.',
    'Nêm nếm lại vừa miệng, rắc thêm tiêu nếu thích vị cay nồng, rồi tắt bếp.',
    'Dọn ra đĩa, dùng nóng với cơm trắng.'
  ],
  notes: 'Có thể thêm chút nước cốt dừa để món kho béo và thơm hơn. Nếu thích vị cay mạnh, cho thêm vài lát ớt tươi hoặc ớt bột trong lúc kho.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jH1wMq4CS7M" title="Cách làm Gà kho sả ớt ngon chuẩn vị, cay thơm cực đưa cơm | Spicy Lemongrass Chicken Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ga-kho-mang',
  name: 'Gà kho măng',
  category: ['Món thịt gà', 'Món mặn'],
  image: 'images/74.jpg',
  description: 'Gà kho măng – món ăn dân dã đậm vị quê hương, thịt gà thấm gia vị mặn mà hòa quyện cùng măng giòn giòn, thơm nhẹ. Ăn kèm cơm trắng nóng hổi là hết sảy.',
  ingredients: [
    { name: 'Thịt gà (má đùi hoặc cánh)', amount: '600g (chặt miếng vừa ăn)' },
    { name: 'Măng tươi hoặc măng luộc', amount: '300g (xé sợi hoặc cắt khúc vừa)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Ớt (tùy thích)', amount: '1–2 trái (băm nhỏ nếu thích cay)' }
  ],
  steps: [
    'Rửa sạch thịt gà, để ráo, ướp với nước mắm, đường, hạt nêm, tiêu, hành tỏi băm và ớt trong 20–30 phút cho thấm gia vị.',
    'Măng luộc sơ cho bớt chua, rửa lại với nước lạnh, để ráo.',
    'Bắc chảo, cho dầu ăn vào phi thơm hành tỏi, rồi cho gà vào xào săn cho đến khi thịt đổi màu vàng.',
    'Cho măng vào đảo cùng, nêm lại gia vị cho vừa miệng.',
    'Thêm chút nước, kho nhỏ lửa trong 20–25 phút cho gà chín mềm và măng thấm vị.',
    'Khi nước kho sệt lại, rắc thêm tiêu, trộn đều rồi tắt bếp. Dọn ra dĩa, ăn nóng với cơm trắng.'
  ],
  notes: 'Có thể dùng măng khô (ngâm mềm, luộc kỹ) để món ăn có hương vị đặc trưng hơn. Nếu thích vị béo, có thể thêm chút nước dừa khi kho.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ykPKXW04qEw" title="Cách làm Gà kho măng thơm ngon, mặn mà chuẩn vị cơm nhà | Chicken Braised with Bamboo Shoots Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lau-ga-la-e',
  name: 'Lẩu gà lá é',
  category: ['Món lẩu', 'Món thịt gà'],
  image: 'images/75.jpg',
  description: 'Lẩu gà lá é – món đặc sản trứ danh của xứ Đà Lạt, hương thơm nồng đặc trưng của lá é hòa quyện cùng vị ngọt thanh từ thịt gà và nước dùng cay nhẹ từ ớt hiểm xanh, vừa ấm bụng vừa cuốn hút khó quên.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '1 con (khoảng 1.2kg, chặt miếng vừa ăn)' },
    { name: 'Lá é tươi', amount: '100g (rửa sạch, để ráo)' },
    { name: 'Sả cây', amount: '4 cây (đập dập, cắt khúc)' },
    { name: 'Ớt hiểm xanh', amount: '2–3 trái (đập dập)' },
    { name: 'Nấm (nấm bào ngư, nấm rơm, nấm kim châm...)', amount: '200g (tùy thích)' },
    { name: 'Măng chua', amount: '100g (rửa sạch, cắt khúc)' },
    { name: 'Nước dùng gà', amount: '2 lít' },
    { name: 'Muối hột', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường phèn', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Bắc nồi, cho dầu ăn vào phi thơm sả, ớt và hành tím (nếu thích).',
    'Cho thịt gà vào xào săn cùng chút muối hột để thịt gà thơm và săn chắc hơn.',
    'Đổ nước dùng gà vào nồi, đun sôi rồi hớt bọt cho nước trong.',
    'Cho măng chua và nấm vào nấu cùng, nêm hạt nêm, đường phèn và nước mắm cho vừa khẩu vị.',
    'Khi gà chín mềm, thêm lá é vào nồi ngay trước khi ăn để giữ mùi thơm đặc trưng.',
    'Dọn lẩu ra, ăn nóng cùng bún tươi, rau ăn kèm và chấm với chén muối ớt xanh đúng kiểu Đà Lạt.'
  ],
  notes: 'Lá é có vị the nhẹ, thơm đặc trưng, nên chỉ cho vào khi ăn để tránh bị đắng. Có thể thêm ớt hiểm xanh và chanh để tăng vị cay chua dịu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qmXEEp7T1uE" title="Cách nấu Lẩu gà lá é chuẩn vị Đà Lạt thơm ngon cay nhẹ ấm lòng | Vietnamese Chicken Hotpot with É Leaves Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lau-ga-la-giang',
  name: 'Lẩu gà lá giang',
  category: ['Món lẩu', 'Món thịt gà'],
  image: 'images/76.jpg',
  description: 'Lẩu gà lá giang – món ăn quen thuộc trong bữa cơm gia đình Việt, nước dùng chua thanh từ lá giang hòa quyện cùng vị ngọt từ thịt gà, thêm chút cay nồng từ ớt, mang lại hương vị vừa dân dã vừa hấp dẫn.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '1 con (khoảng 1.2kg, chặt miếng vừa ăn)' },
    { name: 'Lá giang tươi', amount: '100g (rửa sạch, vò nhẹ cho ra chất chua)' },
    { name: 'Sả cây', amount: '3 cây (đập dập, cắt khúc)' },
    { name: 'Ớt hiểm', amount: '2–3 trái (băm nhỏ hoặc để nguyên nếu thích cay nhẹ)' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Nấm rơm', amount: '150g (rửa sạch, cắt đôi)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước dùng gà (hoặc nước sôi)', amount: '2 lít' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và sả.',
    'Cho thịt gà vào xào săn với chút muối, nước mắm và đường cho thịt thấm vị.',
    'Thêm cà chua vào xào cho ra màu rồi đổ nước dùng vào nấu sôi.',
    'Khi nước sôi, hớt bọt cho trong, sau đó cho nấm rơm và ớt vào.',
    'Khi gà gần chín, cho lá giang vào nấu thêm 3–5 phút đến khi nước có vị chua thanh tự nhiên.',
    'Nêm lại vừa miệng, tắt bếp, rắc thêm tiêu nếu thích. Dọn ra ăn nóng với bún tươi hoặc cơm trắng.'
  ],
  notes: 'Lá giang có vị chua tự nhiên nên chỉ cho vào cuối cùng để giữ mùi thơm và vị thanh. Có thể thêm rau ăn kèm như rau muống, bắp chuối bào để ăn cùng lẩu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/M9zv8xR2B3o" title="Cách nấu Lẩu gà lá giang chua cay đậm đà hương vị miền Tây | Vietnamese Chicken Hotpot with Lá Giang Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lau-ga-ot-hiem',
  name: 'Lẩu gà ớt hiểm',
  category: ['Món lẩu', 'Món thịt gà'],
  image: 'images/77.jpg',
  description: 'Lẩu gà ớt hiểm – món ăn cay nồng chuẩn vị miền Tây, thịt gà dai ngọt hòa quyện cùng nước dùng đậm đà, thơm lừng mùi sả, ớt và tiêu xanh. Một nồi lẩu nóng hổi khiến ai cũng xuýt xoa mà vẫn muốn gắp mãi không ngừng.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '1 con (1.2–1.5kg, chặt miếng vừa ăn)' },
    { name: 'Ớt hiểm xanh', amount: '10–15 trái (đập dập nhẹ)' },
    { name: 'Sả cây', amount: '5 cây (đập dập, cắt khúc)' },
    { name: 'Tỏi', amount: '4 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tiêu xanh', amount: '1 nhánh nhỏ (tùy thích)' },
    { name: 'Nước dừa tươi', amount: '1 lít' },
    { name: 'Nước dùng gà', amount: '1 lít' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường phèn', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Rau ăn kèm', amount: 'rau muống, nấm, bắp non, bún tươi (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi, cho dầu ăn vào phi thơm tỏi, hành tím và sả.',
    'Cho thịt gà vào xào săn với muối và hạt nêm cho thấm đều gia vị.',
    'Thêm ớt hiểm xanh và tiêu xanh vào đảo nhanh tay cho dậy mùi cay nồng.',
    'Đổ nước dừa và nước dùng gà vào, đun sôi, hớt bọt cho nước trong.',
    'Hạ nhỏ lửa, nấu khoảng 20–25 phút đến khi gà chín mềm, nước dùng đậm vị.',
    'Nêm lại bằng nước mắm, đường phèn cho vừa miệng. Dọn ra ăn nóng với rau và bún tươi.'
  ],
  notes: 'Nếu thích vị cay nhẹ, có thể giảm lượng ớt hiểm. Khi ăn, nên để riêng ít ớt hiểm nguyên trái để giữ mùi thơm đặc trưng mà không quá cay.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/r7yE4GgpQzI" title="Cách nấu Lẩu gà ớt hiểm cay nồng, thơm ngon chuẩn vị miền Tây | Spicy Chicken Hotpot with Chili Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lau-ga-thuoc-bac',
  name: 'Lẩu gà thuốc bắc',
  category: ['Món lẩu', 'Món thịt gà'],
  image: 'images/78.jpg',
  description: 'Lẩu gà thuốc bắc – món ăn bổ dưỡng giúp bồi bổ cơ thể, tăng sức đề kháng. Nước lẩu ngọt thanh từ gà ta hầm cùng các vị thuốc bắc như táo tàu, kỷ tử, nhân sâm… tạo nên hương vị thanh nhẹ, dễ chịu và ấm bụng.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '1 con (khoảng 1.2kg, chặt miếng vừa ăn)' },
    { name: 'Thuốc bắc hầm gà (bán sẵn)', amount: '1 gói (gồm táo tàu, kỷ tử, hoài sơn, nhân sâm lát...)' },
    { name: 'Nước dừa tươi', amount: '1 lít' },
    { name: 'Nước lọc', amount: '1.5 lít' },
    { name: 'Gừng tươi', amount: '1 củ nhỏ (đập dập)' },
    { name: 'Hành tím', amount: '2 củ (nướng thơm)' },
    { name: 'Muối', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường phèn', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Rau ăn kèm', amount: 'rau cải, nấm, mì hoặc miến (tùy chọn)' }
  ],
  steps: [
    'Rửa sạch gà, chần qua nước sôi cho bớt mùi hôi rồi vớt ra để ráo.',
    'Cho nước dừa, nước lọc, gói thuốc bắc, gừng và hành tím vào nồi, đun sôi.',
    'Cho gà vào hầm với lửa nhỏ khoảng 40–50 phút cho đến khi thịt gà mềm và thấm vị thuốc.',
    'Trong quá trình hầm, hớt bọt thường xuyên để nước trong và giữ hương thơm thanh nhẹ.',
    'Nêm nếm lại với muối, hạt nêm, đường phèn và nước mắm cho vừa miệng.',
    'Dọn lẩu ra, thêm rau, nấm hoặc mì vào nồi khi ăn nóng.'
  ],
  notes: 'Có thể cho thêm vài lát đông trùng hạ thảo hoặc nhân sâm tươi để tăng giá trị dinh dưỡng. Món này thích hợp dùng trong những ngày mưa lạnh hoặc khi cần bồi bổ sức khỏe.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/l90oN0qYmt8" title="Cách nấu Lẩu gà thuốc bắc thơm ngon bổ dưỡng | Herbal Chicken Hotpot Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'goi-ga-bap-cai',
  name: 'Gỏi gà bắp cải',
  category: ['Món gỏi', 'Món thịt gà'],
  image: 'images/79.jpg',
  description: 'Gỏi gà bắp cải – món khai vị thanh mát, giòn ngon và dễ ăn. Thịt gà dai ngọt kết hợp cùng bắp cải giòn, cà rốt sợi, rau thơm và nước trộn chua ngọt đậm vị, tạo nên món gỏi hấp dẫn cho cả gia đình.',
  ingredients: [
    { name: 'Thịt ức gà hoặc đùi gà luộc', amount: '300g (xé sợi)' },
    { name: 'Bắp cải trắng', amount: '200g (bào sợi mỏng)' },
    { name: 'Cà rốt', amount: '1 củ (bào sợi)' },
    { name: 'Hành tây', amount: '1/2 củ (bào mỏng, ngâm nước đá để bớt hăng)' },
    { name: 'Rau mùi (ngò rí)', amount: '10g (tỉa nhỏ)' },
    { name: 'Đậu phộng rang', amount: '2 muỗng canh (giã thô)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Chanh', amount: '1 quả (vắt lấy nước cốt)' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 trái (băm nhỏ, tùy thích)' }
  ],
  steps: [
    'Trộn nước mắm, đường, chanh, tỏi và ớt thành nước trộn gỏi chua ngọt.',
    'Cho bắp cải, cà rốt và hành tây vào tô lớn, thêm thịt gà xé sợi vào.',
    'Rưới nước trộn gỏi lên, trộn đều nhẹ tay để các nguyên liệu thấm vị.',
    'Để gỏi nghỉ 5–10 phút cho thấm gia vị.',
    'Trước khi ăn, rắc rau mùi và đậu phộng rang lên trên.',
    'Dọn ra đĩa, ăn ngay để giữ độ giòn của rau củ.'
  ],
  notes: 'Có thể thêm xoài xanh hoặc dứa thái sợi để tăng vị chua ngọt đặc trưng. Gỏi nên ăn ngay sau khi trộn để rau không bị ra nước và mất độ giòn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_q2Z7Z-nrZs" title="Cách làm gỏi gà bắp cải giòn ngon, chua ngọt chuẩn vị | Chicken Cabbage Salad Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'goi-ga-hanh-tay',
  name: 'Gỏi gà hành tây',
  category: ['Món gỏi', 'Món thịt gà'],
  image: 'images/80.jpg',
  description: 'Gỏi gà hành tây – món gỏi thanh mát, kết hợp thịt gà dai ngọt với hành tây giòn ngọt tự nhiên, rau thơm tươi mát và nước trộn chua ngọt vừa miệng. Món ăn khai vị hoàn hảo cho bữa cơm gia đình hay đãi khách.',
  ingredients: [
    { name: 'Thịt ức gà hoặc đùi gà luộc', amount: '300g (xé sợi)' },
    { name: 'Hành tây', amount: '1 củ lớn (bào mỏng, ngâm nước đá để bớt hăng)' },
    { name: 'Cà rốt', amount: '1 củ (bào sợi)' },
    { name: 'Rau mùi (ngò rí)', amount: '10g (tỉa nhỏ)' },
    { name: 'Đậu phộng rang', amount: '2 muỗng canh (giã thô)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Chanh', amount: '1 quả (vắt lấy nước cốt)' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 trái (băm nhỏ, tùy thích)' }
  ],
  steps: [
    'Pha nước trộn gỏi bằng cách hòa nước mắm, đường, chanh, tỏi và ớt tạo vị chua ngọt vừa ăn.',
    'Cho thịt gà xé sợi, hành tây và cà rốt vào tô lớn.',
    'Rưới nước trộn gỏi lên, trộn đều nhẹ tay để các nguyên liệu thấm đều vị.',
    'Để gỏi nghỉ 5–10 phút cho thấm gia vị.',
    'Trước khi ăn, rắc rau mùi và đậu phộng rang lên trên.',
    'Dọn ra đĩa và thưởng thức ngay để giữ độ giòn của hành tây và vị tươi ngon của rau.'
  ],
  notes: 'Ngâm hành tây trong nước đá giúp bớt hăng và giòn hơn. Có thể thêm ít xoài xanh bào sợi để món gỏi thêm thanh mát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2jCkHlzO4VY" title="Cách làm gỏi gà hành tây giòn ngon, chua ngọt hấp dẫn | Chicken Salad with Onion Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'chao-ga',
  name: 'Cháo gà',
  category: ['Món cháo', 'Món thịt gà'],
  image: 'images/81.jpg',
  description: 'Cháo gà – món ăn thanh đạm, bổ dưỡng, thích hợp cho cả người lớn và trẻ nhỏ. Thịt gà dai ngọt hòa cùng gạo nấu nhuyễn, nước dùng thơm lừng, dễ ăn và ấm bụng.',
  ingredients: [
    { name: 'Thịt gà (đùi hoặc ức)', amount: '300g (chặt miếng vừa ăn)' },
    { name: 'Gạo tẻ', amount: '100g (vo sạch)' },
    { name: 'Gạo nếp', amount: '50g (vo sạch, để nấu cháo thêm độ sánh)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Gừng tươi', amount: '1 nhánh nhỏ (băm nhuyễn)' },
    { name: 'Nước dùng gà hoặc nước lọc', amount: '1.5 lít' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Hành lá', amount: '1–2 cây (thái nhỏ)' },
    { name: 'Ngò rí', amount: '10g (tỉa nhỏ)' }
  ],
  steps: [
    'Rửa sạch gạo tẻ và gạo nếp, để ráo.',
    'Bắc nồi, cho gạo và nước dùng vào, nấu lửa vừa cho đến khi gạo nở mềm, cháo sánh mịn.',
    'Trong lúc nấu cháo, cho gà vào luộc chín, sau đó xé nhỏ hoặc giữ nguyên miếng tùy thích.',
    'Phi thơm hành tím và gừng trong chút dầu ăn, cho vào nồi cháo để tăng mùi thơm.',
    'Khi cháo gần chín, cho thịt gà vào, nêm nếm nước mắm, muối và tiêu vừa ăn.',
    'Tắt bếp, rắc hành lá và ngò rí lên trên trước khi dọn ra chén.',
    'Thưởng thức cháo nóng, có thể ăn kèm tiêu và quẩy nếu thích.'
  ],
  notes: 'Có thể ninh cháo lâu hơn để cháo nhuyễn mịn hơn. Món cháo gà thích hợp dùng cho bữa sáng hoặc bữa tối thanh đạm.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0nL0u4LXnqY" title="Cách nấu cháo gà thơm ngon, bổ dưỡng, chuẩn vị nhà hàng | Chicken Congee Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'mien-ga',
  name: 'Miến gà',
  category: ['Ăn sáng', 'Món thịt gà'],
  image: 'images/82.jpg',
  description: 'Miến gà – món ăn thanh nhẹ, bổ dưỡng và thơm ngon. Sợi miến dai mềm kết hợp cùng thịt gà ngọt, nước dùng trong vắt, thêm chút rau thơm tươi mát, tạo nên món ăn hấp dẫn cho bữa sáng hoặc bữa tối.',
  ingredients: [
    { name: 'Thịt gà (đùi hoặc ức)', amount: '300g (chặt miếng vừa ăn hoặc xé sợi)' },
    { name: 'Miến dong', amount: '150g (ngâm nước ấm 15 phút trước khi nấu)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ, phi thơm)' },
    { name: 'Gừng tươi', amount: '1 nhánh nhỏ (thái sợi)' },
    { name: 'Nước dùng gà', amount: '1.5 lít' },
    { name: 'Rau mùi (ngò rí)', amount: '10g (tỉa nhỏ)' },
    { name: 'Hành lá', amount: '1–2 cây (thái nhỏ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Rau sống ăn kèm', amount: 'rau mùi, rau húng quế, giá đỗ (tùy thích)' }
  ],
  steps: [
    'Ngâm miến trong nước ấm khoảng 15 phút, vớt ra để ráo.',
    'Bắc nồi nước dùng gà, cho gừng và một nửa hành tím phi thơm vào nấu sôi.',
    'Cho thịt gà vào nấu chín, sau đó xé sợi nếu chưa làm trước.',
    'Nêm nếm nước mắm, muối và tiêu vừa ăn.',
    'Chần miến qua nước sôi khoảng 1–2 phút, vớt ra để ráo.',
    'Cho miến vào tô, xếp thịt gà lên trên, chan nước dùng nóng, rắc hành lá và rau mùi.',
    'Thưởng thức ngay với rau sống và gia vị kèm theo.'
  ],
  notes: 'Có thể thêm nấm, cà rốt thái sợi hoặc măng để nước dùng thêm đậm vị. Miến gà ngon nhất khi ăn nóng và nước dùng trong, thơm mùi gà.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2h_MR9xjZ1g" title="Cách nấu miến gà thơm ngon, bổ dưỡng, chuẩn vị | Chicken Glass Noodle Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'pho-ga',
  name: 'Phở gà',
  category: ['Ăn sáng', 'Món thịt gà'],
  image: 'images/83.jpg',
  description: 'Phở gà – món ăn truyền thống Việt Nam, với nước dùng trong vắt, thanh ngọt từ xương gà và thịt gà dai mềm. Kết hợp cùng bánh phở mềm, hành lá, rau thơm và chút gia vị tạo nên hương vị chuẩn Việt, hấp dẫn và dễ ăn.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '500g (đùi hoặc ức, chặt miếng vừa ăn)' },
    { name: 'Xương gà', amount: '500g (rửa sạch, chần nước sôi)' },
    { name: 'Bánh phở', amount: '300g (trụng qua nước sôi)' },
    { name: 'Hành lá', amount: '2 cây (thái nhỏ)' },
    { name: 'Ngò rí', amount: '10g (tỉa nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (nướng sơ hoặc phi thơm)' },
    { name: 'Gừng tươi', amount: '1 nhánh (nướng sơ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Gia vị khác', amount: 'hoa hồi, quế, thảo quả, hạt mùi (tùy thích)' },
    { name: 'Rau ăn kèm', amount: 'giá đỗ, rau húng quế, chanh, ớt tươi' }
  ],
  steps: [
    'Chần xương gà qua nước sôi để loại bỏ bọt và mùi hôi, sau đó rửa sạch.',
    'Nướng sơ hành tím và gừng cho thơm, cho vào nồi nước cùng xương gà, đun sôi rồi hạ nhỏ lửa hầm khoảng 45–60 phút.',
    'Vớt xương và hành, gừng ra, lọc nước dùng trong.',
    'Thêm nước mắm, muối, đường và các gia vị khác (hoa hồi, quế, thảo quả) vào nước dùng, nêm nếm vừa miệng.',
    'Chần bánh phở qua nước sôi, xếp vào tô, đặt thịt gà lên trên.',
    'Chan nước dùng nóng, rắc hành lá, ngò rí, thêm rau sống ăn kèm.',
    'Dọn ra và thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Nước dùng phở gà ngon nhất khi trong, thanh ngọt tự nhiên và không bị mặn. Có thể điều chỉnh gia vị và rau ăn kèm tùy sở thích.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZtK2FqtpYhQ" title="Cách nấu phở gà thơm ngon, chuẩn vị Việt | Vietnamese Chicken Pho Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'hu-tieu-ga',
  name: 'Hủ tiếu gà',
  category: ['Ăn sáng', 'Món thịt gà'],
  image: 'images/84.jpg',
  description: 'Hủ tiếu gà – món ăn thanh nhẹ, nước dùng trong và ngọt tự nhiên từ xương gà, kết hợp cùng sợi hủ tiếu dai mềm, thịt gà ngọt, rau sống tươi mát. Một bát hủ tiếu gà nóng hổi mang hương vị miền Nam đặc trưng, thích hợp cho bữa sáng hoặc bữa tối.',
  ingredients: [
    { name: 'Thịt gà ta', amount: '300g (đùi hoặc ức, chặt miếng vừa ăn)' },
    { name: 'Xương gà', amount: '300g (rửa sạch, chần qua nước sôi)' },
    { name: 'Hủ tiếu khô hoặc tươi', amount: '200g (trụng qua nước sôi)' },
    { name: 'Hành tím', amount: '2 củ (nướng sơ hoặc phi thơm)' },
    { name: 'Gừng tươi', amount: '1 nhánh (đập dập)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Rau ăn kèm', amount: 'rau húng quế, rau mùi, giá đỗ, chanh, ớt tươi' },
    { name: 'Hành lá', amount: '1–2 cây (thái nhỏ)' }
  ],
  steps: [
    'Chần xương gà qua nước sôi để loại bỏ bọt và mùi hôi, rửa sạch.',
    'Nướng sơ hành tím và gừng, cho vào nồi nước cùng xương gà, đun sôi rồi hầm nhỏ lửa khoảng 45 phút.',
    'Vớt xương và hành, gừng ra, lọc nước dùng trong.',
    'Thêm nước mắm, muối, đường và tiêu vào nước dùng, nêm vừa ăn.',
    'Chần hủ tiếu qua nước sôi, xếp vào tô, đặt thịt gà lên trên.',
    'Chan nước dùng nóng, rắc hành lá, thêm rau sống ăn kèm.',
    'Thưởng thức ngay khi còn nóng để cảm nhận đầy đủ vị thanh ngọt và thơm ngon.'
  ],
  notes: 'Nước dùng hủ tiếu gà ngon nhất khi trong, thanh ngọt tự nhiên. Có thể thêm nấm hoặc cà rốt thái sợi để nước dùng đậm vị hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/F4ymV3fZp0g" title="Cách nấu hủ tiếu gà thơm ngon, chuẩn vị miền Nam | Chicken Ho Fun Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'kho-ga-la-chanh',
  name: 'Khô gà lá chanh',
  category: ['Món thịt gà', 'Món ăn vặt'],
  image: 'images/85.jpg',
  description: 'Khô gà lá chanh – món ăn vặt thơm lừng, thịt gà dai ngọt thấm vị gia vị, kết hợp hương lá chanh tươi mát. Món ăn thích hợp để nhâm nhi cùng gia đình hoặc làm quà tặng.',
  ingredients: [
    { name: 'Thịt ức gà', amount: '500g (xé sợi dài)' },
    { name: 'Lá chanh tươi', amount: '10–15 lá (rửa sạch, thái sợi nhỏ)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Ớt sừng', amount: '2 trái (băm nhỏ, tùy thích)' },
    { name: 'Đường', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '3 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Ướp gà xé sợi với nước mắm, đường, hạt nêm, tiêu, tỏi và ớt băm trong 30 phút cho thấm gia vị.',
    'Bắc chảo lên, cho dầu ăn vào, phi thơm tỏi và ớt, sau đó cho gà vào xào trên lửa vừa đến khi thịt săn và khô dẻo.',
    'Thêm lá chanh thái sợi vào, đảo đều nhanh tay cho thấm hương thơm mà không làm lá chanh bị khét.',
    'Tiếp tục xào đến khi thịt gà khô ráo, có độ dai vừa phải và màu đẹp.',
    'Tắt bếp, để nguội và bảo quản trong hộp kín.',
    'Dùng trực tiếp làm món ăn vặt hoặc ăn kèm cơm đều ngon.'
  ],
  notes: 'Có thể gia giảm ớt tùy khẩu vị. Khô gà lá chanh ngon nhất khi xào vừa chín tới, giữ được độ dai của thịt và hương thơm của lá chanh.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/N8C-KuV8G5A" title="Cách làm khô gà lá chanh dai ngon, thấm vị | Dried Chicken with Kaffir Lime Leaves Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'chan-ga-ngam-sa-tac',
  name: 'Chân gà ngâm sả tắc',
  category: ['Món ăn vặt', 'Món thịt gà'],
  image: 'images/86.jpg',
  description: 'Chân gà ngâm sả tắc – món ăn vặt chua cay hấp dẫn, chân gà giòn sật, thấm đều gia vị và hương thơm từ sả, tắc. Thích hợp làm món nhậu, ăn chơi hoặc khai vị cho bữa cơm gia đình.',
  ingredients: [
    { name: 'Chân gà', amount: '500g (rửa sạch, cắt móng, luộc sơ)' },
    { name: 'Sả', amount: '5 cây (thái khúc 3–4cm)' },
    { name: 'Tắc (quất)', amount: '5–6 quả (cắt đôi, bỏ hạt)' },
    { name: 'Tỏi', amount: '3 tép (băm nhuyễn)' },
    { name: 'Ớt sừng', amount: '2 trái (băm nhỏ)' },
    { name: 'Giấm', amount: '100ml' },
    { name: 'Đường', amount: '50g' },
    { name: 'Muối', amount: '1 muỗng cà phê' },
    { name: 'Nước lọc', amount: '200ml' }
  ],
  steps: [
    'Luộc chân gà trong nước sôi khoảng 5–7 phút, vớt ra ngâm vào nước đá để giòn, sau đó để ráo.',
    'Cho giấm, đường, muối và nước lọc vào nồi, đun sôi, khuấy đều cho đường tan, để nguội.',
    'Xếp chân gà vào hũ thủy tinh, thêm sả, tắc, tỏi và ớt vào.',
    'Rót hỗn hợp giấm đường đã nguội vào hũ, ngập chân gà.',
    'Đậy kín, để ngâm trong tủ lạnh ít nhất 12 giờ để chân gà thấm gia vị.',
    'Thưởng thức chân gà giòn, chua cay, thơm mùi sả tắc.'
  ],
  notes: 'Có thể điều chỉnh độ chua cay theo khẩu vị. Chân gà ngâm sả tắc nên để trong hũ kín và bảo quản trong tủ lạnh để giữ độ giòn lâu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3K6i9pJ3Z9g" title="Cách làm chân gà ngâm sả tắc giòn ngon, chua cay hấp dẫn | Pickled Chicken Feet with Lemongrass & Kumquat Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},


{
  id: 'bo-luc-lac',
  name: 'Bò lúc lắc',
  category: ['Món thịt bò', 'Món xào', 'Món mặn'],
  image: 'images/87.jpg',
  description: 'Bò lúc lắc – món bò xào thịnh soạn, thịt bò mềm ngọt, thấm đều gia vị, kết hợp với hành tây và ớt chuông giòn ngọt. Thích hợp ăn cùng cơm trắng hoặc bánh mì, mang hương vị chuẩn nhà hàng.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '300g (cắt hạt lựu)' },
    { name: 'Hành tây', amount: '1/2 củ (bổ múi cau)' },
    { name: 'Ớt chuông đỏ', amount: '1/2 quả (cắt miếng vừa)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Rượu trắng hoặc dầu hào', amount: '1 muỗng canh (tùy thích)' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu, đường và rượu trắng/dầu hào trong 15–20 phút.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho thịt bò vào xào trên lửa lớn, đảo nhanh tay đến khi thịt săn và chín tới.',
    'Thêm hành tây và ớt chuông vào xào nhanh, giữ độ giòn của rau.',
    'Nêm nếm lại gia vị cho vừa ăn, tắt bếp.',
    'Dọn ra đĩa và thưởng thức nóng, có thể ăn kèm cơm trắng hoặc bánh mì.'
  ],
  notes: 'Xào thịt bò trên lửa lớn để thịt mềm và giữ được độ ngọt tự nhiên. Không xào quá lâu để tránh thịt bị dai.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VF3cVqD5pUQ" title="Cách làm bò lúc lắc mềm ngon, chuẩn vị nhà hàng | Shaking Beef Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-xao-sa-ot',
  name: 'Bò xào sả ớt',
  category: ['Món thịt bò', 'Món xào', 'Món mặn'],
  image: 'images/88.jpg',
  description: 'Bò xào sả ớt – món ăn đậm vị, thịt bò mềm ngọt thấm gia vị, kết hợp hương sả thơm nồng và ớt cay nhẹ, ăn cùng cơm nóng thì cực kỳ kích thích vị giác.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '300g (cắt lát mỏng)' },
    { name: 'Sả', amount: '2 cây (băm nhuyễn)' },
    { name: 'Ớt tươi', amount: '1–2 trái (băm nhỏ, tùy cay)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu, đường, tỏi và sả băm trong 15–20 phút để thấm gia vị.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm hành tím và sả ớt băm.',
    'Cho thịt bò vào xào trên lửa lớn, đảo nhanh tay để thịt chín đều mà vẫn mềm.',
    'Nêm nếm lại gia vị cho vừa ăn, đảo đều và tắt bếp.',
    'Dọn ra đĩa, thưởng thức nóng với cơm trắng hoặc bún.'
  ],
  notes: 'Xào bò trên lửa lớn giúp thịt mềm, giữ được vị ngọt tự nhiên. Có thể điều chỉnh lượng ớt theo khẩu vị cay vừa phải.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LyN1JzZ5W3Q" title="Cách làm bò xào sả ớt ngon, mềm ngọt, đậm vị | Stir-fried Beef with Lemongrass & Chili Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-xao-rau-muong',
  name: 'Bò xào rau muống',
  category: ['Món thịt bò', 'Món xào', 'Món mặn'],
  image: 'images/89.jpg',
  description: 'Bò xào rau muống – món ăn đơn giản nhưng thơm ngon, thịt bò mềm ngọt kết hợp rau muống xanh giòn, thấm vị gia vị, thích hợp ăn với cơm trắng nóng hổi.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '300g (cắt lát mỏng)' },
    { name: 'Rau muống', amount: '300g (nhặt, rửa sạch, cắt khúc 5cm)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu và đường trong 15 phút để thấm gia vị.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho thịt bò vào xào trên lửa lớn, đảo nhanh tay đến khi thịt săn và chín tới.',
    'Thêm rau muống vào, xào nhanh trên lửa lớn để rau giữ độ xanh và giòn.',
    'Nêm nếm lại gia vị nếu cần, đảo đều rồi tắt bếp.',
    'Dọn ra đĩa và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Xào rau muống nhanh trên lửa lớn để giữ màu xanh và độ giòn. Có thể thêm một chút nước hoặc dầu hào để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4Zqv2yF3F6M" title="Cách làm bò xào rau muống thơm ngon, xanh giòn | Stir-fried Beef with Water Spinach Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-xao-mang-tay',
  name: 'Bò xào măng tây',
  category: ['Món thịt bò', 'Món xào', 'Món mặn'],
  image: 'images/90.jpg',
  description: 'Bò xào măng tây – món ăn thanh mát, thịt bò mềm ngọt hòa quyện với măng tây giòn tươi, thấm đều gia vị, thích hợp ăn cùng cơm trắng hoặc bún nóng.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '300g (cắt lát mỏng)' },
    { name: 'Măng tây', amount: '200g (cắt khúc 3–4cm, bỏ phần già)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu và đường trong 15 phút để thấm gia vị.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho thịt bò vào xào trên lửa lớn, đảo nhanh tay đến khi thịt săn và chín tới.',
    'Thêm măng tây vào xào nhanh, giữ độ giòn và màu xanh tươi của măng.',
    'Nêm nếm lại gia vị vừa ăn, đảo đều rồi tắt bếp.',
    'Dọn ra đĩa và thưởng thức nóng cùng cơm trắng hoặc bún.'
  ],
  notes: 'Xào măng tây nhanh để giữ độ giòn và màu xanh. Có thể thêm một chút dầu hào để tăng hương vị và màu sắc món ăn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MV3tB6Hhx7Q" title="Cách làm bò xào măng tây mềm ngọt, giòn tươi | Stir-fried Beef with Asparagus Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-sot-vang',
  name: 'Bò sốt vang',
  category: ['Món thịt bò', 'Ăn sáng','Món mặn'],
  image: 'images/91.jpg',
  description: 'Bò sốt vang – món ăn đậm đà với thịt bò mềm, thơm mùi vang đỏ, kho cùng cà chua và gia vị đặc trưng. Thích hợp ăn với bánh mì, cơm hoặc bún, mang đến hương vị đậm chất Việt pha chút Tây phương.',
  ingredients: [
    { name: 'Thịt bò', amount: '500g (cắt miếng vừa ăn)' },
    { name: 'Cà chua', amount: '3 quả (băm nhỏ)' },
    { name: 'Hành tây', amount: '1 củ (thái múi cau)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Rượu vang đỏ', amount: '100ml' },
    { name: 'Nước dùng bò hoặc nước lọc', amount: '500ml' },
    { name: 'Bột năng', amount: '1 muỗng canh (hoà nước lạnh)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Gia vị khác', amount: 'quế, hồi (tùy thích)' }
  ],
  steps: [
    'Ướp thịt bò với một chút nước mắm, tiêu, tỏi băm và rượu vang đỏ trong 30 phút.',
    'Bắc nồi lên bếp, cho dầu ăn vào phi thơm tỏi, sau đó cho thịt bò vào xào săn.',
    'Thêm cà chua và hành tây vào xào mềm, tạo màu đẹp và tăng hương vị.',
    'Đổ nước dùng vào nồi, thêm quế và hồi nếu dùng, đun sôi rồi hầm lửa nhỏ khoảng 30–40 phút cho thịt mềm.',
    'Hoà bột năng với nước lạnh, đổ từ từ vào nồi, khuấy đều để nước sốt sánh vừa phải.',
    'Nêm nếm lại nước mắm, đường, tiêu cho vừa ăn.',
    'Dọn ra đĩa hoặc tô, ăn kèm bánh mì, cơm hoặc bún.'
  ],
  notes: 'Bò sốt vang ngon khi thịt mềm, nước sốt sánh mịn, có vị đậm đà của rượu vang và gia vị. Có thể thêm khoai tây hoặc cà rốt để món ăn thêm đầy đủ và màu sắc hấp dẫn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/txW8r7z9yYQ" title="Cách nấu bò sốt vang mềm ngon, đậm vị chuẩn nhà hàng | Beef in Red Wine Sauce Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-kho',
  name: 'Bò kho',
  category: ['Món thịt bò', 'Ăn sáng','Món mặn'],
  image: 'images/92.jpg',
  description: 'Bò kho – món ăn thơm ngon, đậm đà, thịt bò mềm ngọt, kho cùng cà rốt, khoai tây và các gia vị đặc trưng. Thích hợp ăn với bánh mì, cơm nóng hoặc bún, mang đến hương vị hấp dẫn khó cưỡng.',
  ingredients: [
    { name: 'Thịt bò', amount: '500g (cắt miếng vừa ăn)' },
    { name: 'Cà rốt', amount: '2 củ (gọt vỏ, cắt khúc)' },
    { name: 'Khoai tây', amount: '2 củ (gọt vỏ, cắt khúc)' },
    { name: 'Hành tây', amount: '1 củ (thái múi cau)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Sả', amount: '2 cây (băm nhuyễn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước dùng bò hoặc nước lọc', amount: '500ml' },
    { name: 'Bột năng', amount: '1 muỗng canh (hoà nước lạnh)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Gia vị khác', amount: 'hoa hồi, quế (tùy thích)' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu, tỏi và sả băm trong 30 phút.',
    'Bắc nồi lên bếp, cho dầu ăn vào phi thơm tỏi và sả, sau đó cho thịt bò vào xào săn.',
    'Thêm hành tây vào xào mềm, tạo mùi thơm.',
    'Đổ nước dùng vào nồi, thêm hoa hồi, quế nếu dùng, đun sôi rồi hầm lửa nhỏ khoảng 45–60 phút cho thịt mềm.',
    'Cho cà rốt và khoai tây vào, tiếp tục hầm đến khi chín mềm.',
    'Hoà bột năng với nước lạnh, đổ từ từ vào nồi, khuấy đều để nước kho sánh vừa phải.',
    'Nêm nếm lại gia vị, tắt bếp và dọn ra đĩa hoặc tô.',
    'Thưởng thức nóng với bánh mì, cơm hoặc bún.'
  ],
  notes: 'Bò kho ngon khi thịt mềm, nước kho sánh mịn, thấm gia vị và giữ được hương thơm của các loại gia vị. Có thể điều chỉnh độ sánh của nước kho bằng lượng bột năng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7lJXN9kYrXg" title="Cách nấu bò kho mềm ngon, đậm vị | Vietnamese Beef Stew Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'lagu-bo',
  name: 'Lagu bò',
  category: ['Món thịt bò', 'Ăn sáng','Món mặn'],
  image: 'images/93.jpg',
  description: 'Lagu bò – món bò kho kiểu Pháp biến tấu, thịt bò mềm ngọt, kho cùng khoai tây, cà rốt, đậu Hà Lan trong nước sốt đậm đà, thơm mùi gia vị. Thích hợp ăn kèm cơm hoặc bánh mì, mang đến hương vị vừa lạ vừa quen.',
  ingredients: [
    { name: 'Thịt bò', amount: '500g (cắt miếng vừa ăn)' },
    { name: 'Cà rốt', amount: '2 củ (gọt vỏ, cắt khúc)' },
    { name: 'Khoai tây', amount: '2 củ (gọt vỏ, cắt khúc)' },
    { name: 'Hành tây', amount: '1 củ (thái múi cau)' },
    { name: 'Đậu Hà Lan', amount: '100g' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước dùng bò hoặc nước lọc', amount: '500ml' },
    { name: 'Rượu vang đỏ', amount: '50ml' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Gia vị khác', amount: 'lá nguyệt quế, quế, hồi (tùy thích)' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu, tỏi băm trong 30 phút.',
    'Bắc nồi lên bếp, cho dầu ăn vào phi thơm tỏi, sau đó cho thịt bò vào xào săn.',
    'Thêm hành tây vào xào mềm, tạo hương thơm.',
    'Đổ nước dùng và rượu vang đỏ vào, thêm lá nguyệt quế, quế, hồi nếu dùng, đun sôi rồi hầm lửa nhỏ khoảng 40–50 phút cho thịt mềm.',
    'Cho cà rốt, khoai tây và đậu Hà Lan vào, tiếp tục hầm đến khi chín mềm.',
    'Nêm nếm lại gia vị, tắt bếp và dọn ra đĩa hoặc tô.',
    'Thưởng thức nóng với cơm hoặc bánh mì.'
  ],
  notes: 'Lagu bò ngon khi thịt mềm, nước sốt đậm đà và các loại rau củ giữ được độ tươi. Có thể điều chỉnh vị cay hoặc mặn nhạt tùy khẩu vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lfL6Sok2h7A" title="Cách làm lagu bò thơm ngon, mềm ngọt | Beef Stew Lagu Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bun-bo-hue',
  name: 'Bún bò Huế',
  category: ['Món thịt bò', 'Ăn sáng'],
  image: 'images/94.jpg',
  description: 'Bún bò Huế – món ăn nổi tiếng miền Trung, nước dùng đậm đà, thơm mùi sả và mắm ruốc, thịt bò mềm, giò heo béo ngậy, ăn cùng bún Huế dai, rau sống tươi mát. Một bát bún nóng hổi mang trọn hương vị Huế.',
  ingredients: [
    { name: 'Thịt bò bắp', amount: '300g (cắt miếng vừa ăn)' },
    { name: 'Giò heo', amount: '300g (luộc chín)' },
    { name: 'Bún Huế', amount: '200g (trụng nước sôi)' },
    { name: 'Sả', amount: '3 cây (đập dập, băm nhuyễn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ, phi thơm)' },
    { name: 'Mắm ruốc Huế', amount: '1 muỗng canh' },
    { name: 'Nước dùng xương bò', amount: '1.5 lít' },
    { name: 'Ớt bột', amount: '1 muỗng cà phê' },
    { name: 'Gia vị', amount: 'muối, đường, tiêu, hạt nêm' },
    { name: 'Rau sống ăn kèm', amount: 'rau húng quế, rau muống, giá đỗ, chanh, ớt' }
  ],
  steps: [
    'Chần sơ thịt bò và giò heo qua nước sôi, rửa sạch.',
    'Bắc nồi, phi thơm hành tím và sả băm, thêm mắm ruốc Huế, đảo đều.',
    'Đổ nước dùng vào nồi, cho thịt bò và giò heo vào hầm lửa nhỏ khoảng 45–60 phút cho thịt mềm và nước ngọt.',
    'Nêm nếm gia vị gồm muối, đường, hạt nêm, tiêu và ớt bột cho vừa ăn.',
    'Trụng bún Huế qua nước sôi, cho vào tô.',
    'Xếp thịt bò và giò heo lên trên bún, chan nước dùng nóng hổi.',
    'Rắc thêm rau sống, hành ngò, ớt, chanh và thưởng thức.'
  ],
  notes: 'Bún bò Huế ngon khi nước dùng trong, đậm đà, thịt mềm và giò heo béo vừa phải. Có thể điều chỉnh độ cay theo khẩu vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JvZ9FvJjMCI" title="Cách nấu bún bò Huế chuẩn vị miền Trung | Bun Bo Hue Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bit-tet-bo',
  name: 'Bít tết bò',
  category: ['Món thịt bò'],
  image: 'images/95.jpg',
  description: 'Bít tết bò – món ăn sang trọng, thịt bò mềm ngọt, áp chảo vừa chín tới, giữ nguyên vị ngọt tự nhiên. Thích hợp ăn kèm sốt tiêu đen, sốt nấm hoặc rau củ xào, phục vụ trong các bữa tối gia đình hoặc nhà hàng.',
  ingredients: [
    { name: 'Thịt bò thăn hoặc thăn ngoại', amount: '300–400g (để nguyên miếng dày 2–3cm)' },
    { name: 'Tỏi', amount: '2 tép (băm nhuyễn)' },
    { name: 'Bơ', amount: '1 muỗng canh' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Sốt kèm', amount: 'sốt tiêu đen hoặc sốt nấm tùy thích' },
    { name: 'Rau củ ăn kèm', amount: 'cà rốt, đậu que, khoai tây chiên (tùy chọn)' }
  ],
  steps: [
    'Ướp thịt bò với muối và tiêu xay trong 10 phút trước khi áp chảo.',
    'Bắc chảo lên bếp, cho dầu ăn và bơ vào, phi tỏi băm đến thơm.',
    'Cho miếng bò vào áp chảo lửa vừa, mỗi mặt khoảng 3–5 phút tùy độ chín mong muốn (medium, well-done).',
    'Khi gần chín, rưới bơ tỏi lên miếng bò để tăng hương vị.',
    'Tắt bếp, để bò nghỉ 3–5 phút trước khi cắt lát.',
    'Dọn ra đĩa, kèm rau củ xào hoặc sốt yêu thích, thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Để bít tết mềm và ngon, nên chọn miếng thịt tươi, dày và không xào quá lâu. Có thể điều chỉnh thời gian áp chảo theo sở thích về độ chín.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/f1n1lR_qOU4" title="Cách làm bít tết bò mềm ngon, áp chảo chuẩn nhà hàng | Beef Steak Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'pho-bo',
  name: 'Phở bò',
  category: ['Món thịt bò', 'Ăn sáng'],
  image: 'images/96.jpg',
  description: 'Phở bò – món ăn truyền thống Việt Nam, nước dùng trong, đậm đà, thịt bò mềm, bánh phở dai ngon, kết hợp hành, ngò và các loại gia vị tạo nên hương vị đặc trưng khó quên. Thích hợp cho bữa sáng hoặc bữa tối ấm áp.',
  ingredients: [
    { name: 'Thịt bò bắp', amount: '300g (cắt lát mỏng)' },
    { name: 'Xương bò', amount: '500g (ninh lấy nước dùng)' },
    { name: 'Bánh phở', amount: '200g (trụng nước sôi)' },
    { name: 'Hành lá', amount: '2 cây (cắt khúc)' },
    { name: 'Ngò rí', amount: '1 ít (rửa sạch, thái nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (nướng hoặc phi thơm)' },
    { name: 'Gừng', amount: '1 nhánh nhỏ (nướng hoặc đập dập)' },
    { name: 'Gia vị', amount: 'muối, đường, nước mắm, tiêu, hoa hồi, quế, thảo quả' },
    { name: 'Rau ăn kèm', amount: 'giá đỗ, rau quế, chanh, ớt' }
  ],
  steps: [
    'Ninh xương bò với nước lạnh khoảng 2–3 giờ, hớt bọt để nước trong.',
    'Nướng hành tím và gừng, cho vào nồi nước dùng cùng các gia vị như hoa hồi, quế, thảo quả, đun sôi nhỏ lửa.',
    'Chần sơ thịt bò bắp qua nước sôi để loại bỏ tạp chất, giữ thịt mềm.',
    'Trụng bánh phở qua nước sôi, cho vào tô.',
    'Xếp thịt bò lên bánh phở, chan nước dùng nóng hổi.',
    'Rắc hành lá, ngò rí, thêm rau sống, giá, chanh, ớt tùy thích và thưởng thức.'
  ],
  notes: 'Phở bò ngon khi nước dùng trong, đậm đà, thịt mềm, bánh phở dai. Có thể điều chỉnh độ đậm nhạt và cay theo khẩu vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xN2K0XkzNDo" title="Cách nấu phở bò chuẩn vị Hà Nội | Vietnamese Beef Pho Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-nuong-sot-trung-muoi',
  name: 'Bò nướng tảng sốt trứng muối',
  category: ['Món thịt bò', 'Món nướng', 'Món mặn'],
  image: 'images/79.jpg',
  description: 'Bò nướng tảng sốt trứng muối – món ăn sang trọng, thịt bò tảng nướng vừa chín tới, thấm đều gia vị, phủ lớp sốt trứng muối béo ngậy, thơm lừng. Thích hợp dùng trong các bữa tối đặc biệt hoặc đãi khách.',
  ingredients: [
    { name: 'Thịt bò tảng (ribeye hoặc thăn ngoại)', amount: '500g (để nguyên miếng dày 2–3cm)' },
    { name: 'Trứng muối', amount: '3 quả (luộc chín, lấy lòng đỏ)' },
    { name: 'Bơ', amount: '2 muỗng canh' },
    { name: 'Tỏi', amount: '2 tép (băm nhuyễn)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Sốt kem hoặc sốt mayonnaise', amount: '2 muỗng canh (trộn cùng lòng đỏ trứng muối)' },
    { name: 'Rau củ ăn kèm', amount: 'khoai tây chiên, cà rốt, đậu que (tùy chọn)' }
  ],
  steps: [
    'Ướp thịt bò với muối và tiêu xay trong 10 phút trước khi nướng.',
    'Băm nhuyễn tỏi, phi thơm với bơ, trộn cùng lòng đỏ trứng muối và sốt kem/mayonnaise tạo thành sốt trứng muối.',
    'Bật lò nướng ở 200°C, nướng miếng bò khoảng 8–12 phút tùy độ chín mong muốn (medium, well-done).',
    'Khi bò gần chín, phết đều sốt trứng muối lên bề mặt, nướng thêm 2–3 phút để sốt vàng đều.',
    'Lấy ra, để nghỉ 3–5 phút, cắt lát vừa ăn.',
    'Dọn ra đĩa, kèm rau củ hoặc khoai tây chiên, thưởng thức khi còn nóng.'
  ],
  notes: 'Bò nướng sốt trứng muối ngon khi thịt mềm, sốt béo ngậy, vàng đều và giữ được vị ngọt tự nhiên của thịt. Thời gian nướng có thể điều chỉnh tùy độ dày miếng thịt và khẩu vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/AbCdEf12345" title="Cách làm bò nướng tảng sốt trứng muối thơm ngon | Salted Egg Beef Steak Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-cuon-nam-kim-cham',
  name: 'Bò cuộn nấm kim châm',
  category: ['Món thịt bò', 'Món xào'],
  image: 'images/98.jpg',
  description: 'Bò cuộn nấm kim châm – món ăn hấp dẫn với thịt bò mềm ngọt, cuộn bên trong nấm kim châm giòn tươi, thấm đều gia vị. Thích hợp ăn với cơm nóng hoặc làm món khai vị trong bữa tiệc.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '300g (cắt lát mỏng)' },
    { name: 'Nấm kim châm', amount: '200g (cắt gốc, rửa sạch)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Que tăm', amount: 'dùng để cố định cuộn bò' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm, tiêu, đường và tỏi băm trong 15 phút.',
    'Cho nấm kim châm vào từng lát thịt bò, cuộn lại và cố định bằng que tăm.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho cuộn bò vào xào lửa vừa, đảo đều cho thịt chín và nấm mềm.',
    'Nêm nếm lại gia vị cho vừa ăn, tắt bếp.',
    'Dọn ra đĩa, bỏ que tăm trước khi thưởng thức, ăn nóng với cơm trắng hoặc bún.'
  ],
  notes: 'Xào cuộn bò nhanh trên lửa vừa để thịt mềm, nấm giòn tươi. Có thể phết thêm một lớp sốt mayonnaise hoặc sốt dầu hào để món ăn thêm đậm vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XyZ12345678" title="Cách làm bò cuộn nấm kim châm thơm ngon | Enoki Mushroom Beef Rolls Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bo-ne',
  name: 'Bò né',
  category: ['Món thịt bò', 'Ăn sáng'],
  image: 'images/99.jpg',
  description: 'Bò né – món ăn sáng phổ biến, thịt bò mềm ngọt được áp chảo nóng hổi, ăn kèm trứng ốp la, pate, xúc xích và rau sống. Hương vị đậm đà, thơm lừng, hấp dẫn ngay từ miếng đầu tiên.',
  ingredients: [
    { name: 'Thịt bò thăn hoặc thăn ngoại', amount: '200–250g (cắt lát dày 1–2cm)' },
    { name: 'Trứng gà', amount: '1–2 quả' },
    { name: 'Pate', amount: '50g' },
    { name: 'Xúc xích', amount: '50g' },
    { name: 'Bơ', amount: '1 muỗng canh' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau sống', amount: 'rau xà lách, cà chua, dưa leo (tùy chọn)' }
  ],
  steps: [
    'Ướp thịt bò với muối, tiêu và tỏi băm trong 10 phút.',
    'Bắc chảo gang hoặc chảo chống dính lên bếp, cho bơ và dầu ăn vào làm nóng.',
    'Cho thịt bò vào áp chảo trên lửa lớn, mỗi mặt 2–3 phút hoặc đến độ chín mong muốn.',
    'Khi bò gần chín, đặt trứng ốp la, pate và xúc xích vào chảo, chiên nóng cùng.',
    'Dọn tất cả ra đĩa, kèm rau sống và bánh mì nếu muốn.',
    'Thưởng thức ngay khi còn nóng để giữ độ mềm và thơm của thịt.'
  ],
  notes: 'Bò né ngon nhất khi ăn nóng, thịt mềm, trứng vừa chín tới và pate tan chảy. Có thể điều chỉnh độ chín của thịt bò theo sở thích (rare, medium, well-done).',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YyZ12345678" title="Cách làm bò né thơm ngon, chuẩn vị quán | Vietnamese Sizzling Beef Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'salad-thit-bo',
  name: 'Salad thịt bò',
  category: ['Món thịt bò', 'Món rau củ'],
  image: 'images/100.jpg',
  description: 'Salad thịt bò – món ăn nhẹ nhàng, thanh mát với thịt bò mềm ngọt kết hợp rau xanh tươi, cà chua, dưa leo và nước sốt chua ngọt. Thích hợp làm món khai vị hoặc bữa ăn giảm cân, giàu dinh dưỡng.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '200g (cắt lát mỏng)' },
    { name: 'Xà lách', amount: '100g (rửa sạch, xé nhỏ)' },
    { name: 'Cà chua', amount: '1 quả (cắt múi cau)' },
    { name: 'Dưa leo', amount: '1 quả (cắt lát mỏng)' },
    { name: 'Hành tây', amount: '1/2 củ (thái mỏng)' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Chanh', amount: '1/2 quả (vắt lấy nước)' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu oliu', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với một ít muối, tiêu, tỏi băm trong 10 phút.',
    'Bắc chảo nóng, áp chảo thịt bò nhanh trên lửa vừa, giữ cho thịt mềm và không quá chín.',
    'Chuẩn bị rau xà lách, cà chua, dưa leo và hành tây trong một tô lớn.',
    'Pha nước sốt: trộn nước mắm, nước chanh, đường và dầu oliu cho vừa miệng.',
    'Cho thịt bò đã áp chảo vào tô rau, rưới nước sốt lên, trộn đều.',
    'Dọn ra đĩa, trang trí thêm rau thơm nếu muốn và thưởng thức ngay.'
  ],
  notes: 'Salad thịt bò ngon khi thịt mềm, rau tươi giòn và nước sốt cân bằng giữa chua, ngọt và mặn. Có thể thêm ớt tươi hoặc hạt điều rang để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/AbC12345678" title="Cách làm salad thịt bò thanh mát, ngon miệng | Beef Salad Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'com-rang-dua-bo',
  name: 'Cơm rang dưa bò',
  category: ['Món thịt bò', 'Món cơm'],
  image: 'images/101.jpg',
  description: 'Cơm rang dưa bò – món cơm rang thơm ngon, vị đậm đà với thịt bò mềm ngọt, dưa cải muối chua nhẹ và cơm rang vàng giòn. Thích hợp cho bữa trưa hoặc tối nhanh gọn mà vẫn đầy hương vị.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '200g (cắt lát mỏng)' },
    { name: 'Cơm nguội', amount: '300g' },
    { name: 'Dưa cải muối', amount: '100g (cắt nhỏ)' },
    { name: 'Hành lá', amount: '2 cây (cắt khúc)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Trứng gà', amount: '1 quả' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với nước mắm, hạt nêm và tiêu trong 10–15 phút.',
    'Bắc chảo lên bếp, cho dầu ăn vào phi thơm tỏi băm.',
    'Đổ thịt bò vào xào nhanh tay trên lửa lớn đến khi săn lại.',
    'Đẩy thịt sang một bên chảo, đập trứng vào chiên chín, trộn đều với thịt.',
    'Cho cơm nguội và dưa cải muối vào chảo, đảo đều trên lửa lớn khoảng 3–5 phút cho cơm nóng và dưa thấm gia vị.',
    'Thêm hành lá, đảo nhanh rồi tắt bếp.',
    'Dọn ra đĩa và thưởng thức nóng.'
  ],
  notes: 'Cơm rang dưa bò ngon khi cơm tơi, không bị nát, thịt bò mềm, dưa cải vừa chua vừa đậm đà. Nên dùng cơm nguội để cơm rang giòn và săn hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYZ12345678" title="Cách làm cơm rang dưa bò thơm ngon, nhanh gọn | Beef and Pickled Mustard Greens Fried Rice Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-nuong-giay-bac',
  name: 'Cá nướng giấy bạc',
  category: ['Món cá', 'Món nướng', 'Món mặn'],
  image: 'images/102.jpg',
  description: 'Cá nướng giấy bạc – món ăn thơm ngon, giữ nguyên vị ngọt tự nhiên của cá, kết hợp cùng gia vị và rau thơm. Thích hợp dùng trong bữa cơm gia đình hoặc tiệc nướng ngoài trời.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá hồi hoặc cá vược)', amount: '1 con (~500g), làm sạch' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 cây (cắt khúc)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Chanh', amount: '1/2 quả (vắt lấy nước)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Giấy bạc', amount: '1 tấm lớn đủ gói cá' }
  ],
  steps: [
    'Ướp cá với nước mắm, dầu ăn, tiêu, tỏi, hành tím và nước cốt chanh trong 15–20 phút.',
    'Trải giấy bạc, đặt cá lên giữa, rải hành lá và ớt lên trên.',
    'Gói kín cá bằng giấy bạc, tạo túi kín để giữ nhiệt và nước sốt.',
    'Bật lò nướng ở 200°C, nướng cá khoảng 20–25 phút (tùy kích thước cá).',
    'Mở giấy bạc, kiểm tra cá chín, rưới thêm một chút nước mắm pha nếu cần.',
    'Dọn cá ra đĩa, trang trí với rau thơm và thưởng thức nóng.'
  ],
  notes: 'Cá nướng giấy bạc ngon khi thịt cá mềm, giữ được vị ngọt tự nhiên, gia vị thấm đều. Có thể thay thế bằng các loại cá ưa thích và thêm rau củ như cà rốt, nấm để món ăn phong phú hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ABC12345678" title="Cách làm cá nướng giấy bạc thơm ngon | Foil Baked Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-nuong-cuon-banh-trang',
  name: 'Cá nướng cuốn bánh tráng',
  category: ['Món cá', 'Món nướng'],
  image: 'images/103.jpg',
  description: 'Cá nướng cuốn bánh tráng – món ăn thơm ngon, cá nướng vừa chín tới, giữ được vị ngọt tự nhiên, cuốn cùng rau sống, bún và bánh tráng, chấm với nước mắm chua ngọt, tạo nên hương vị tươi mát và hấp dẫn.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá thu hoặc cá rô phi)', amount: '1 con (~500g), làm sạch' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau sống', amount: 'rau xà lách, rau thơm, dưa leo, cà rốt (tùy chọn)' },
    { name: 'Bún tươi', amount: '100g' },
    { name: 'Bánh tráng', amount: '5–6 tờ' },
    { name: 'Chanh', amount: '1/2 quả (vắt lấy nước)' }
  ],
  steps: [
    'Ướp cá với nước mắm, dầu ăn, tiêu, tỏi, hành tím và ớt trong 15–20 phút.',
    'Nướng cá trên than hoa hoặc lò nướng ở 200°C khoảng 15–20 phút đến khi cá chín, vàng đều.',
    'Chuẩn bị rau sống, bún tươi và bánh tráng để cuốn.',
    'Cắt cá thành miếng vừa ăn, bỏ xương nếu cần.',
    'Cuốn cá cùng rau sống, bún và bánh tráng, chấm với nước mắm chua ngọt pha chanh, đường, tỏi, ớt.',
    'Thưởng thức ngay khi cá còn nóng và bánh tráng mềm.'
  ],
  notes: 'Món ăn ngon khi cá nướng chín mềm, rau sống tươi mát, bánh tráng mềm nhưng không nát. Có thể thêm nước sốt mayonnaise hoặc sốt me để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DEF12345678" title="Cách làm cá nướng cuốn bánh tráng thơm ngon | Grilled Fish Rice Paper Rolls Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-kho-nghe',
  name: 'Cá kho nghệ',
  category: ['Món cá','Món mặn'],
  image: 'images/104.jpg',
  description: 'Cá kho nghệ – món ăn đậm đà, cá mềm ngọt thấm gia vị, kết hợp cùng nghệ tươi thơm nồng, ăn với cơm nóng thì ngon tuyệt. Thích hợp cho bữa cơm gia đình giản dị nhưng đầy hương vị.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá lóc hoặc cá trắm)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Nghệ tươi', amount: '2–3 củ (giã nhuyễn hoặc băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Ướp cá với nước mắm, đường, tiêu và nghệ băm trong 15–20 phút.',
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Cho cá vào nồi, đảo nhẹ để cá thấm gia vị.',
    'Đổ nước lọc vừa đủ, đun sôi rồi hạ lửa liu riu, kho khoảng 20–30 phút đến khi cá mềm và nước sánh lại.',
    'Thêm ớt vào, đảo nhẹ, nêm nếm lại cho vừa ăn.',
    'Dọn ra đĩa, rắc thêm chút hành lá hoặc tiêu xay, ăn kèm cơm nóng.'
  ],
  notes: 'Cá kho nghệ ngon khi cá mềm, thấm đều gia vị, nước kho sánh và thơm mùi nghệ. Không kho quá lâu để cá không bị nát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GHI12345678" title="Cách làm cá kho nghệ thơm ngon | Turmeric Braised Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-kho-mang',
  name: 'Cá kho măng',
  category: ['Món cá','Món mặn'],
  image: 'images/105.jpg',
  description: 'Cá kho măng – món ăn đậm đà, cá mềm ngọt kết hợp măng chua giòn, nước kho sánh vàng và thơm lừng. Thích hợp cho bữa cơm gia đình, đặc biệt khi ăn với cơm nóng.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá lóc hoặc cá trắm)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Măng chua', amount: '150g (rửa sạch, cắt khúc)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Ướp cá với nước mắm, đường, tiêu trong 15–20 phút.',
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Cho cá vào nồi, đảo nhẹ để thấm gia vị.',
    'Thêm măng chua và nước lọc, đun sôi rồi hạ lửa nhỏ, kho khoảng 20–30 phút đến khi cá mềm, nước kho sánh và thấm đều măng.',
    'Thêm ớt vào, nêm nếm lại cho vừa ăn.',
    'Dọn ra đĩa, rắc chút hành lá hoặc tiêu xay, ăn nóng cùng cơm.'
  ],
  notes: 'Cá kho măng ngon khi cá mềm, măng giòn chua vừa phải, nước kho sánh và đậm đà. Không kho quá lâu để cá không bị nát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JKL12345678" title="Cách làm cá kho măng thơm ngon | Braised Fish with Bamboo Shoots Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-sot-ca-chua',
  name: 'Cá sốt cà chua',
  category: ['Món cá','Món mặn'],
  image: 'images/44.jpg',
  description: 'Cá sốt cà chua – món ăn thơm ngon, cá mềm ngọt hòa quyện cùng sốt cà chua chua ngọt đậm đà. Thích hợp dùng trong bữa cơm gia đình, ăn với cơm nóng sẽ rất vừa miệng.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá trắm hoặc cá thu)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Cà chua', amount: '3–4 quả (băm nhỏ hoặc xay nhuyễn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Nước lọc', amount: '50ml' }
  ],
  steps: [
    'Ướp cá với một ít muối và tiêu trong 10 phút.',
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Thêm cà chua băm vào xào đến khi ra nước và sánh lại, nêm đường, nước mắm cho vừa ăn.',
    'Cho cá vào nồi, thêm nước lọc vừa đủ, đun sôi rồi hạ lửa liu riu khoảng 15–20 phút đến khi cá chín và thấm sốt.',
    'Thêm ớt nếu muốn, nêm nếm lại gia vị.',
    'Dọn ra đĩa, rắc chút hành lá hoặc tiêu xay, thưởng thức cùng cơm nóng.'
  ],
  notes: 'Cá sốt cà chua ngon khi cá mềm, thấm đều sốt, vị chua ngọt hài hòa. Có thể thêm rau thơm hoặc thì là để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNO12345678" title="Cách làm cá sốt cà chua thơm ngon | Fish in Tomato Sauce Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-kho-khe',
  name: 'Cá kho khế',
  category: ['Món cá', 'Món mặn'],
  image: 'images/106.jpg',
  description: 'Cá kho khế – món ăn đậm đà với cá mềm ngọt hòa quyện vị chua nhẹ của khế xanh, nước kho sánh vàng và thơm phức. Ăn cùng cơm nóng sẽ rất hấp dẫn và đưa cơm.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá lóc hoặc cá trắm)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Khế xanh', amount: '1–2 quả (cắt lát)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Ướp cá với nước mắm, đường, tiêu trong 15–20 phút.',
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Cho cá vào nồi, đảo nhẹ để thấm gia vị.',
    'Thêm nước lọc và khế vào, đun sôi rồi hạ lửa nhỏ, kho khoảng 20–30 phút đến khi cá mềm và nước kho sánh.',
    'Thêm ớt nếu muốn, nêm nếm lại gia vị cho vừa ăn.',
    'Dọn ra đĩa, rắc chút hành lá hoặc tiêu xay, ăn cùng cơm nóng.'
  ],
  notes: 'Cá kho khế ngon khi cá mềm, thấm đều gia vị, khế chua vừa phải và nước kho sánh đậm đà. Không kho quá lâu để cá không bị nát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PQR12345678" title="Cách làm cá kho khế thơm ngon | Braised Fish with Starfruit Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-kho-thom',
  name: 'Cá kho thơm',
  category: ['Món cá', 'Món mặn'],
  image: 'images/107.jpg',
  description: 'Cá kho thơm – món ăn đậm đà, cá mềm ngọt kết hợp vị chua ngọt nhẹ của thơm (dứa), nước kho sánh vàng và thơm lừng. Thích hợp ăn cùng cơm nóng trong bữa cơm gia đình.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá lóc hoặc cá trắm)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Thơm (dứa)', amount: '150g (gọt vỏ, cắt miếng vừa ăn)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước lọc', amount: '100ml' }
  ],
  steps: [
    'Ướp cá với nước mắm, đường, tiêu trong 15–20 phút.',
    'Bắc nồi, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Cho cá vào nồi, đảo nhẹ để thấm gia vị.',
    'Thêm nước lọc và thơm vào, đun sôi rồi hạ lửa nhỏ, kho khoảng 20–30 phút đến khi cá mềm, nước kho sánh và thơm ngấm đều cá.',
    'Thêm ớt nếu muốn, nêm nếm lại gia vị cho vừa ăn.',
    'Dọn ra đĩa, rắc chút hành lá hoặc tiêu xay, ăn nóng cùng cơm.'
  ],
  notes: 'Cá kho thơm ngon khi cá mềm, thấm đều gia vị, thơm ngọt vừa phải và nước kho sánh đậm đà. Không kho quá lâu để cá không bị nát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/STU12345678" title="Cách làm cá kho thơm thơm ngon | Pineapple Braised Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-kho-lang-vu-dai',
  name: 'Cá kho làng Vũ Đại',
  category: ['Món cá','Món mặn'],
  image: 'images/108.jpg',
  description: 'Cá kho làng Vũ Đại – món cá kho truyền thống nổi tiếng với hương vị đậm đà, cá mềm thơm, nước kho sánh vàng, thấm đều gia vị đặc trưng làng quê. Ăn cùng cơm nóng, đưa cơm và đầy hương vị Việt.',
  ingredients: [
    { name: 'Cá trắm hoặc cá diêu hồng', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (tùy chọn)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm ngon', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/2 muỗng cà phê' },
    { name: 'Nước lọc', amount: '100ml' },
    { name: 'Nghệ tươi (tùy chọn)', amount: '1 củ (băm nhuyễn)' }
  ],
  steps: [
    'Ướp cá với nước mắm, đường, tiêu và nghệ (nếu dùng) trong 20 phút.',
    'Bắc nồi đất hoặc nồi thường, cho dầu ăn vào phi thơm hành tím và tỏi băm.',
    'Cho cá vào nồi, đảo nhẹ để thấm gia vị.',
    'Thêm nước lọc vừa đủ, đun sôi rồi hạ lửa nhỏ, kho khoảng 30–40 phút cho cá mềm, nước kho sánh và thấm đều.',
    'Thêm ớt nếu muốn, nêm nếm lại gia vị cho vừa ăn.',
    'Dọn cá ra đĩa, rắc chút hành lá hoặc tiêu xay, thưởng thức cùng cơm nóng.'
  ],
  notes: 'Cá kho làng Vũ Đại nổi tiếng nhờ cá mềm, nước kho sánh, đậm đà hương vị truyền thống. Dùng nồi đất để kho sẽ giữ được hương vị thơm ngon đặc trưng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/UVW12345678" title="Cách làm cá kho làng Vũ Đại truyền thống | Vu Dai Village Braised Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-chien-gion',
  name: 'Cá chiên giòn',
  category: ['Món cá', 'Món chiên', 'Món mặn'],
  image: 'images/29.jpg',
  description: 'Cá chiên giòn – món ăn đơn giản nhưng thơm ngon, cá chiên vàng giòn bên ngoài, mềm ngọt bên trong. Thích hợp ăn kèm cơm nóng hoặc làm món nhậu, chấm với nước mắm chua ngọt.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá basa hoặc cá rô phi)', amount: '500g (làm sạch, cắt khúc vừa ăn)' },
    { name: 'Bột năng hoặc bột chiên giòn', amount: '2 muỗng canh' },
    { name: 'Trứng gà', amount: '1 quả (đánh tan)' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: 'đủ để chiên ngập cá' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh (để chấm)' }
  ],
  steps: [
    'Ướp cá với muối và tiêu trong 10 phút.',
    'Nhúng cá vào trứng gà đánh tan, sau đó lăn đều qua bột năng hoặc bột chiên giòn.',
    'Bắc chảo sâu lòng, cho dầu ăn đủ ngập cá, đun nóng.',
    'Thả cá vào chiên vàng giòn, trở đều các mặt để cá chín và giòn đều.',
    'Vớt cá ra giấy thấm dầu để bớt mỡ.',
    'Dọn ra đĩa, thưởng thức nóng cùng nước mắm chua ngọt.'
  ],
  notes: 'Cá chiên giòn ngon khi lớp vỏ giòn, thịt cá mềm, không bị khô. Có thể thêm chút ớt bột hoặc hành lá trang trí để món ăn hấp dẫn hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYZ98765432" title="Cách làm cá chiên giòn thơm ngon | Crispy Fried Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-chien-nuoc-mam',
  name: 'Cá chiên nước mắm',
  category: ['Món cá', 'Món chiên', 'Món mặn'],
  image: 'images/109.jpg',
  description: 'Cá chiên nước mắm – món ăn thơm ngon, cá chiên giòn hòa quyện cùng sốt nước mắm chua ngọt đậm đà, vừa miệng. Thích hợp ăn cùng cơm nóng hoặc làm món nhậu, mang hương vị đặc trưng Việt Nam.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá basa hoặc cá rô phi)', amount: '500g (làm sạch, cắt khúc vừa ăn)' },
    { name: 'Bột năng hoặc bột chiên giòn', amount: '2 muỗng canh' },
    { name: 'Trứng gà', amount: '1 quả (đánh tan)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Dầu ăn', amount: 'đủ để chiên ngập cá' },
    { name: 'Nước mắm', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '50ml' },
    { name: 'Chanh', amount: '1/2 quả (tùy chọn)' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Ướp cá với một chút muối và tiêu trong 10 phút.',
    'Nhúng cá vào trứng gà đánh tan, sau đó lăn đều qua bột năng hoặc bột chiên giòn.',
    'Bắc chảo sâu lòng, cho dầu ăn đủ ngập cá, đun nóng.',
    'Thả cá vào chiên vàng giòn, trở đều các mặt để cá chín và giòn đều. Vớt ra giấy thấm dầu.',
    'Trong một chảo khác, phi thơm tỏi và ớt băm, thêm nước mắm, đường và nước lọc, đun sôi đến khi sốt sánh lại.',
    'Rưới sốt nước mắm lên cá chiên, thêm nước cốt chanh nếu muốn.',
    'Dọn ra đĩa và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Cá chiên nước mắm ngon khi lớp cá giòn, thịt mềm, sốt nước mắm chua ngọt hài hòa. Có thể trang trí thêm hành lá hoặc ớt để món ăn hấp dẫn hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ABC98765432" title="Cách làm cá chiên nước mắm thơm ngon | Fried Fish with Fish Sauce Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-hap',
  name: 'Cá hấp',
  category: ['Món cá','Món mặn'],
  image: 'images/110.jpg',
  description: 'Cá hấp – món ăn thanh nhẹ, giữ nguyên vị ngọt tự nhiên của cá, thơm mùi hành, gừng và các loại rau thơm. Thích hợp cho bữa ăn gia đình, đặc biệt khi muốn ăn món nhẹ nhưng vẫn ngon miệng.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá trắm hoặc cá rô phi)', amount: '500g (làm sạch, cắt khúc vừa ăn)' },
    { name: 'Hành lá', amount: '2–3 cây (cắt khúc)' },
    { name: 'Gừng', amount: '1 củ (thái sợi nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước mắm', amount: '1–2 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau thơm (ngò rí, thì là)', amount: 'tùy thích' }
  ],
  steps: [
    'Ướp cá với một chút nước mắm, tiêu, hành tím, tỏi và gừng trong 10–15 phút.',
    'Xếp cá vào đĩa chịu nhiệt, rải hành lá và rau thơm lên trên.',
    'Cho cá vào nồi hấp hoặc xửng hấp, hấp khoảng 15–20 phút đến khi cá chín mềm.',
    'Bắc chảo nhỏ, cho dầu ăn phi thơm hành tím, tỏi rồi rưới lên cá hấp.',
    'Nêm thêm một chút nước mắm hoặc tiêu xay nếu cần.',
    'Dọn ra đĩa và thưởng thức nóng, ăn kèm cơm trắng.'
  ],
  notes: 'Cá hấp ngon khi cá chín mềm, giữ được vị ngọt tự nhiên và mùi thơm của hành, gừng. Không hấp quá lâu để cá không bị nát.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DEF98765432" title="Cách làm cá hấp thơm ngon | Steamed Fish Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'chao-ca',
  name: 'Cháo cá',
  category: ['Món cá', 'Món cháo'],
  image: 'images/111.jpg',
  description: 'Cháo cá – món ăn thanh nhẹ, bổ dưỡng, cá mềm ngọt hòa quyện cùng cháo nhuyễn mịn. Thích hợp cho bữa sáng hoặc bữa ăn cho cả người lớn và trẻ nhỏ.',
  ingredients: [
    { name: 'Cá (cá lóc, cá diêu hồng hoặc cá trắm)', amount: '200g (làm sạch, lọc xương)' },
    { name: 'Gạo', amount: '100g (ngâm 30 phút)' },
    { name: 'Hành lá', amount: '2–3 cây (cắt nhỏ)' },
    { name: 'Gừng', amount: '1 củ (thái sợi nhỏ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '1 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước mắm', amount: '1–2 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau thơm (ngò rí, thì là)', amount: 'tùy thích' }
  ],
  steps: [
    'Vo gạo và nấu với nước thành cháo nhuyễn, khuấy đều để không bị khét.',
    'Ướp cá với một chút muối và tiêu, để 10 phút.',
    'Bắc chảo nhỏ, cho dầu ăn vào phi thơm hành tím, tỏi và gừng.',
    'Cho cá vào chảo xào sơ đến khi vừa chín, tắt bếp.',
    'Múc cá vào cháo, khuấy đều, đun thêm vài phút để cháo thấm vị cá.',
    'Rắc hành lá, rau thơm và nêm thêm nước mắm, tiêu xay cho vừa ăn.',
    'Dọn cháo ra bát, ăn nóng.'
  ],
  notes: 'Cháo cá ngon khi cháo nhuyễn mịn, cá mềm và giữ được vị ngọt tự nhiên. Có thể thêm ít nước cốt chanh để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GHI98765432" title="Cách nấu cháo cá thơm ngon | Fish Congee Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}, 
{
  id: 'lau-ca',
  name: 'Lẩu cá',
  category: ['Món cá', 'Món lẩu'],
  image: 'images/112.jpg',
  description: 'Lẩu cá – món ăn hấp dẫn, cá tươi mềm ngọt hòa quyện cùng nước lẩu chua cay hoặc thanh ngọt, kèm rau, nấm và các loại gia vị, thích hợp cho bữa ăn nhóm hay gia đình.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá trắm hoặc cá hồi)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Đậu hũ', amount: '100g (cắt miếng vừa ăn)' },
    { name: 'Nấm kim châm', amount: '100g (rửa sạch)' },
    { name: 'Rau các loại (xà lách, cải xanh, rau ngổ, thì là)', amount: 'tùy thích' },
    { name: 'Thơm (dứa)', amount: '1/2 quả (cắt miếng vừa ăn)' },
    { name: 'Cà chua', amount: '2–3 quả (cắt múi cau)' },
    { name: 'Ớt', amount: '1–2 quả (tùy chọn)' },
    { name: 'Bún hoặc mì', amount: '200g (dùng kèm)' },
    { name: 'Nước dùng gà hoặc xương', amount: '1.5 lít' },
    { name: 'Gia vị', amount: 'muối, đường, hạt nêm, tiêu, nước mắm' }
  ],
  steps: [
    'Đun nước dùng gà hoặc xương, nêm muối, đường, hạt nêm và một chút nước mắm.',
    'Cho thơm, cà chua và các loại gia vị vào nồi nước dùng, đun sôi khoảng 5–10 phút.',
    'Cho cá vào nồi, hạ lửa nhỏ, nấu đến khi cá chín vừa tới.',
    'Cho đậu hũ, nấm và rau các loại vào nồi lẩu, đun sôi lại.',
    'Chuẩn bị bún hoặc mì ăn kèm, nêm nếm lại nước lẩu cho vừa miệng.',
    'Dọn lẩu ra bàn, ăn nóng cùng bún, rau sống và gia vị chấm tùy thích.'
  ],
  notes: 'Lẩu cá ngon khi cá tươi, nước dùng đậm đà, rau và nấm chín vừa tới, giữ được độ giòn và vị ngọt tự nhiên. Có thể thêm ớt tươi hoặc sa tế để tăng vị cay nếu thích.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LMN12345678" title="Cách nấu lẩu cá thơm ngon | Fish Hotpot Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bun-ca',
  name: 'Bún cá',
  category: ['Ăn sáng', 'Món cá'],
  image: 'images/113.jpg',
  description: 'Bún cá – món ăn dân dã, thanh nhẹ nhưng đậm đà hương vị. Nước dùng ngọt thanh từ xương cá và cà chua, thịt cá chiên vàng thơm, ăn kèm rau sống và bún tươi, mang đậm hương vị đặc trưng miền Bắc và miền Trung.',
  ingredients: [
    { name: 'Cá (cá rô phi, cá lóc hoặc cá thu)', amount: '600g (làm sạch, cắt khúc hoặc lọc lấy phi lê)' },
    { name: 'Bún tươi', amount: '500g' },
    { name: 'Cà chua', amount: '3 quả (bổ múi cau)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Hành lá và thì là', amount: '1 ít (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau ăn kèm (xà lách, rau muống chẻ, húng quế...)', amount: 'tùy thích' },
    { name: 'Nước lọc hoặc nước dùng xương', amount: '1,5 lít' }
  ],
  steps: [
    'Cá làm sạch, ướp nhẹ với muối, tiêu và một ít nước mắm trong 10 phút.',
    'Chiên cá vàng đều hai mặt, vớt ra để ráo dầu.',
    'Phi thơm hành tím với dầu ăn, cho cà chua vào xào mềm để tạo màu.',
    'Thêm nước dùng (hoặc nước lọc) vào nồi, nêm nếm nước mắm, hạt nêm, đường cho vừa miệng.',
    'Khi nước sôi, cho cá đã chiên vào, nấu nhỏ lửa 10 phút cho thấm vị.',
    'Chần bún qua nước sôi, cho vào tô.',
    'Chan nước dùng và xếp cá lên trên, rắc thêm hành lá, thì là và tiêu xay.',
    'Dùng kèm rau sống và chanh ớt nếu thích.'
  ],
  notes: 'Bún cá ngon là khi nước dùng có vị ngọt thanh, không tanh; cá vàng giòn bên ngoài, mềm ngọt bên trong. Có thể dùng cá rô phi chiên hoặc cá thu hấp tùy khẩu vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYZ12345678" title="Cách nấu bún cá ngon chuẩn vị | Vietnamese Fish Noodle Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ca-nau-mang',
  name: 'Canh cá nấu măng',
  category: ['Món canh', 'Món cá'],
  image: 'images/114.jpg',
  description: 'Canh cá nấu măng – món canh đậm đà, chua nhẹ từ măng và ngọt từ cá. Thịt cá mềm, măng giòn, nước canh thơm ngon, thích hợp ăn cùng cơm trắng, mang đậm hương vị truyền thống Việt Nam.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá rô phi hoặc cá chép)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Măng khô', amount: '200g (ngâm mềm, luộc qua)' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau thơm (ngò gai, hành lá)', amount: 'tùy thích' },
    { name: 'Nước lọc hoặc nước dùng', amount: '1,2 lít' }
  ],
  steps: [
    'Cá làm sạch, ướp nhẹ với muối và tiêu trong 10 phút.',
    'Ngâm măng khô, rửa sạch và luộc sơ qua để bớt mùi hăng, vớt ra để ráo.',
    'Phi thơm hành tím và tỏi với dầu ăn, thêm cà chua vào xào mềm.',
    'Cho nước lọc hoặc nước dùng vào nồi, đun sôi.',
    'Cho măng vào nấu khoảng 10 phút cho măng mềm và thấm vị.',
    'Thêm cá vào nồi, nấu nhỏ lửa 10-15 phút cho cá chín và ngấm gia vị.',
    'Nêm nếm nước mắm, đường, hạt nêm cho vừa ăn.',
    'Tắt bếp, rắc hành lá, ngò gai và tiêu xay lên trên.',
    'Dọn ra tô và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Canh cá nấu măng ngon khi măng giòn, cá mềm, nước canh vừa thanh vừa đậm đà. Có thể dùng thêm một ít ớt tươi để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DEF98765432" title="Cách nấu canh cá nấu măng chuẩn vị | Fish Soup with Bamboo Shoots Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ca-nau-dua-chua',
  name: 'Canh cá nấu dưa chua',
  category: ['Món canh', 'Món cá'],
  image: 'images/115.jpg',
  description: 'Canh cá nấu dưa chua – món canh chua thanh mát, đậm đà hương vị Việt Nam. Cá mềm, dưa chua giòn, nước canh chua nhẹ, thích hợp ăn cùng cơm trắng hoặc bún.',
  ingredients: [
    { name: 'Cá (cá diêu hồng, cá rô phi hoặc cá chép)', amount: '500g (làm sạch, cắt khúc)' },
    { name: 'Dưa chua (cải chua, cà muối hoặc dưa muối chua)', amount: '200g (rửa sạch, cắt khúc)' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau thơm (hành lá, ngò gai)', amount: 'tùy thích' },
    { name: 'Nước lọc hoặc nước dùng', amount: '1,2 lít' }
  ],
  steps: [
    'Cá làm sạch, ướp nhẹ với muối và tiêu trong 10 phút.',
    'Phi thơm hành tím và tỏi với dầu ăn, thêm cà chua vào xào mềm.',
    'Cho nước lọc hoặc nước dùng vào nồi, đun sôi.',
    'Thêm dưa chua vào nấu khoảng 5-7 phút để dưa chua mềm và ra vị chua nhẹ.',
    'Cho cá vào nồi, nấu nhỏ lửa 10-15 phút cho cá chín và ngấm vị.',
    'Nêm nếm nước mắm, đường, hạt nêm cho vừa ăn.',
    'Tắt bếp, rắc hành lá, ngò gai và tiêu xay lên trên.',
    'Dọn ra tô và thưởng thức nóng cùng cơm trắng hoặc bún.'
  ],
  notes: 'Canh cá nấu dưa chua ngon khi cá mềm, dưa giòn, nước canh vừa chua vừa ngọt thanh. Có thể thêm một ít ớt tươi nếu thích ăn cay.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GHI12345678" title="Cách nấu canh cá nấu dưa chua chuẩn vị | Sour Fish Soup with Pickled Vegetables Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'salad-ca-hoi-ca-ngu',
  name: 'Salad cá hồi / cá ngừ',
  category: ['Món rau củ','Món cá'],
  image: 'images/116.jpg',
  description: 'Salad cá hồi hoặc cá ngừ – món ăn thanh mát, giàu dinh dưỡng, kết hợp giữa rau củ tươi, cá tươi hoặc cá hộp, và sốt trộn chua ngọt hoặc mayonnaise, thích hợp làm khai vị hoặc bữa nhẹ.',
  ingredients: [
    { name: 'Cá hồi tươi hoặc cá ngừ đóng hộp', amount: '200g (nướng hoặc hấp sơ, hoặc dùng cá ngừ đóng hộp)' },
    { name: 'Rau xà lách', amount: '100g (rửa sạch, xé vừa ăn)' },
    { name: 'Dưa leo', amount: '1 quả (thái lát mỏng)' },
    { name: 'Cà chua bi', amount: '10 quả (cắt đôi)' },
    { name: 'Hành tây', amount: '1/4 củ (thái mỏng)' },
    { name: 'Ớt chuông', amount: '1/2 quả (thái sợi, tùy chọn)' },
    { name: 'Chanh', amount: '1/2 quả (vắt lấy nước cốt)' },
    { name: 'Dầu olive', amount: '2 muỗng canh' },
    { name: 'Sốt mayonnaise hoặc sốt salad', amount: '1-2 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Ngò rí hoặc rau thơm', amount: 'tùy thích' }
  ],
  steps: [
    'Nếu dùng cá hồi tươi, nướng hoặc hấp sơ cá cho chín, để nguội và xé thành miếng vừa ăn.',
    'Nếu dùng cá ngừ đóng hộp, vớt ra, để ráo nước.',
    'Cho rau xà lách, dưa leo, cà chua bi, hành tây, ớt chuông vào tô lớn.',
    'Thêm cá vào tô rau củ, rưới dầu olive, nước cốt chanh và sốt mayonnaise (hoặc sốt salad) lên trên.',
    'Nêm nếm muối, tiêu cho vừa ăn, trộn đều nhẹ tay để cá không bị nát.',
    'Trang trí với ngò rí hoặc rau thơm lên trên.',
    'Dọn ra đĩa và thưởng thức ngay, lạnh sẽ ngon hơn.'
  ],
  notes: 'Salad cá hồi/cá ngừ ngon khi rau tươi, cá mềm, sốt vừa đủ để tạo vị chua ngọt thanh mát. Có thể thêm hạt hướng dương hoặc hạt óc chó để tăng độ giòn và dinh dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JKL98765432" title="Cách làm salad cá hồi / cá ngừ thanh mát | Salmon / Tuna Salad Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'banh-canh-ca',
  name: 'Bánh canh cá',
  category: ['Ăn sáng', 'Món cá'],
  image: 'images/117.jpg',
  description: 'Bánh canh cá – món ăn đậm đà hương vị Việt Nam, nước dùng ngọt thanh từ xương và cá, sợi bánh canh dai mềm, ăn kèm cá chiên hoặc cá hấp, thích hợp dùng cho bữa sáng hoặc trưa.',
  ingredients: [
    { name: 'Bánh canh', amount: '500g' },
    { name: 'Cá (cá lóc, cá thu hoặc cá diêu hồng)', amount: '500g (làm sạch, cắt khúc hoặc lọc phi lê)' },
    { name: 'Xương cá hoặc xương heo', amount: '300g (để nấu nước dùng)' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau thơm (hành lá, ngò gai, rau mùi)', amount: 'tùy thích' },
    { name: 'Ớt tươi', amount: 'tùy chọn' }
  ],
  steps: [
    'Nấu nước dùng: đun sôi xương cá hoặc xương heo với 1,5 lít nước, vớt bọt để nước trong.',
    'Phi thơm hành tím và tỏi với dầu ăn, thêm cà chua vào xào mềm, sau đó cho vào nồi nước dùng.',
    'Thêm muối, đường, hạt nêm, nước mắm vào nêm nếm vừa ăn.',
    'Nếu dùng cá phi lê, thả cá vào nồi, nấu nhỏ lửa 10-15 phút cho cá chín và ngấm gia vị.',
    'Chần bánh canh qua nước sôi, để ráo.',
    'Cho bánh canh vào tô, múc nước dùng và cá lên trên.',
    'Rắc hành lá, ngò gai, tiêu xay, thêm ớt tươi nếu muốn.',
    'Dọn ra và thưởng thức nóng.'
  ],
  notes: 'Bánh canh cá ngon khi nước dùng ngọt thanh, cá mềm, bánh canh dai vừa. Có thể chiên sơ cá trước khi cho vào nước dùng để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNO12345678" title="Cách nấu bánh canh cá chuẩn vị | Vietnamese Fish Noodle Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},


{
  id: 'goi-rau-cu',
  name: 'Gỏi rau củ',
  category: ['Món rau củ'],
  image: 'images/118.jpg',
  description: 'Gỏi rau củ – món ăn thanh mát, giòn ngon, kết hợp nhiều loại rau củ tươi như cà rốt, dưa leo, bắp cải và hành tây, trộn cùng nước sốt chua ngọt hoặc sốt mè rang, thích hợp làm khai vị hoặc bữa ăn nhẹ.',
  ingredients: [
    { name: 'Cà rốt', amount: '1 củ (gọt vỏ, bào sợi)' },
    { name: 'Dưa leo', amount: '1 quả (thái sợi hoặc lát mỏng)' },
    { name: 'Bắp cải tím hoặc xanh', amount: '100g (bào sợi)' },
    { name: 'Hành tây', amount: '1/2 củ (thái mỏng)' },
    { name: 'Ớt tươi', amount: '1 quả (thái lát, tùy chọn)' },
    { name: 'Rau thơm (ngò rí, húng quế)', amount: 'tùy thích' },
    { name: 'Đậu phộng rang', amount: '2 muỗng canh (giã sơ)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng canh' },
    { name: 'Nước cốt chanh', amount: '1 muỗng canh' },
    { name: 'Tỏi băm', amount: '1 tép' }
  ],
  steps: [
    'Pha nước sốt: trộn nước mắm, đường, nước cốt chanh và tỏi băm cho tan đường.',
    'Cho cà rốt, dưa leo, bắp cải và hành tây vào tô lớn, trộn đều.',
    'Rưới nước sốt lên rau củ, trộn nhẹ tay để rau thấm đều sốt.',
    'Thêm rau thơm và rắc đậu phộng rang lên trên.',
    'Dọn ra đĩa và thưởng thức ngay, ngon hơn khi để lạnh 10-15 phút trước khi ăn.'
  ],
  notes: 'Gỏi rau củ ngon khi rau củ tươi, giòn, nước sốt chua ngọt hài hòa. Có thể thêm cà chua bi, nấm tươi hoặc hoa chuối thái sợi để món gỏi đa dạng hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PQR12345678" title="Cách làm gỏi rau củ thanh mát | Vietnamese Vegetable Salad Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cai-thia-xao-nam-dong-co',
  name: 'Cải thìa xào nấm đông cô',
  category: ['Món xào', 'Món rau củ'],
  image: 'images/23.jpg',
  description: 'Cải thìa xào nấm đông cô – món ăn thanh nhẹ, dễ nấu, kết hợp giữa cải thìa giòn mướt và nấm đông cô thơm ngon, thích hợp làm món ăn chay hoặc ăn kèm cơm trắng.',
  ingredients: [
    { name: 'Cải thìa', amount: '300g (rửa sạch, cắt khúc vừa ăn)' },
    { name: 'Nấm đông cô tươi hoặc khô', amount: '150g (rửa sạch, cắt lát nếu nấm to)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Nước lọc', amount: '2 muỗng canh (tùy chọn, để xào nấm mềm)' }
  ],
  steps: [
    'Nếu dùng nấm đông cô khô, ngâm nước ấm 20-30 phút, rửa sạch và cắt lát.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho nấm vào xào khoảng 3-5 phút đến khi nấm mềm và dậy mùi thơm.',
    'Thêm cải thìa vào, đảo nhanh tay khoảng 2-3 phút.',
    'Nêm nước tương, muối, đường, tiêu xay, thêm 1-2 muỗng canh nước lọc nếu cần để rau chín đều.',
    'Xào đều đến khi rau chín nhưng vẫn giữ độ giòn, nêm lại cho vừa ăn.',
    'Tắt bếp và dọn ra đĩa, thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Cải thìa xào nấm đông cô ngon khi rau xanh, giòn mướt, nấm mềm và thấm gia vị. Có thể thêm ớt tươi hoặc dầu mè để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/STU12345678" title="Cách xào cải thìa nấm đông cô | Stir-fried Bok Choy with Shiitake Mushrooms Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'sup-lo-xao-bo',
  name: 'Súp lơ xào bò',
  category: ['Món xào', 'Món thịt bò', 'Món rau củ'],
  image: 'images/119.jpg',
  description: 'Súp lơ xào bò – món ăn bổ dưỡng, kết hợp giữa bông súp lơ giòn ngọt và thịt bò mềm, thấm gia vị, thích hợp ăn kèm cơm trắng hoặc làm món ăn chính trong bữa tối.',
  ingredients: [
    { name: 'Súp lơ trắng hoặc súp lơ xanh', amount: '300g (tách nhỏ, rửa sạch)' },
    { name: 'Thịt bò', amount: '200g (thái mỏng theo thớ)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Đường', amount: '1/4 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Dầu mè', amount: '1/2 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Ướp thịt bò với 1/2 muỗng cà phê nước tương, một ít tiêu và dầu ăn khoảng 10 phút.',
    'Bắc chảo lên bếp, cho dầu ăn và tỏi băm vào phi thơm.',
    'Cho thịt bò vào xào nhanh lửa lớn khoảng 2-3 phút đến khi thịt vừa chín tới, vớt ra đĩa.',
    'Trong chảo, cho súp lơ vào xào khoảng 3-5 phút, nêm muối, đường, hạt nêm, đảo đều.',
    'Thêm thịt bò vào chảo, trộn đều với súp lơ, nêm thêm nước tương và tiêu xay nếu cần.',
    'Xào nhanh tay đến khi súp lơ giòn mềm vừa ăn.',
    'Tắt bếp, rưới một ít dầu mè lên trên (nếu dùng), dọn ra đĩa và thưởng thức.'
  ],
  notes: 'Món súp lơ xào bò ngon khi súp lơ giòn, thịt bò mềm, gia vị thấm đều. Có thể thêm ớt tươi hoặc hành lá để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VWX12345678" title="Cách xào súp lơ bò ngon | Stir-fried Broccoli with Beef Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'muc-xao-thap-cam',
  name: 'Mực xào thập cẩm',
  category: ['Món xào', 'Hải sản', 'Món rau củ'],
  image: 'images/120.jpg',
  description: 'Mực xào thập cẩm – món ăn thơm ngon, kết hợp mực tươi dai giòn với các loại rau củ đa dạng như ớt chuông, cà rốt, hành tây, tạo nên màu sắc hấp dẫn và hương vị đậm đà, thích hợp ăn cùng cơm trắng.',
  ingredients: [
    { name: 'Mực tươi', amount: '300g (làm sạch, cắt khoanh)' },
    { name: 'Cà rốt', amount: '1/2 củ (thái sợi hoặc lát mỏng)' },
    { name: 'Ớt chuông đỏ và vàng', amount: '1 quả mỗi loại (thái lát)' },
    { name: 'Hành tây', amount: '1/2 củ (thái múi cau)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Dầu mè', amount: '1/2 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Mực rửa sạch, để ráo, cắt khoanh vừa ăn.',
    'Bắc chảo lên bếp, cho dầu ăn và tỏi băm vào phi thơm.',
    'Cho mực vào xào nhanh lửa lớn khoảng 2-3 phút đến khi mực săn lại, vớt ra đĩa.',
    'Trong chảo, xào cà rốt, ớt chuông và hành tây khoảng 3-5 phút đến khi rau vừa chín giòn.',
    'Thêm mực trở lại chảo, nêm nước tương, hạt nêm, muối, đường và tiêu xay, đảo đều khoảng 1-2 phút.',
    'Tắt bếp, rưới một ít dầu mè lên (nếu dùng), dọn ra đĩa và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Mực xào thập cẩm ngon khi mực dai giòn, rau củ vừa chín tới, gia vị hài hòa. Có thể thêm nấm đông cô hoặc hành lá để tăng hương vị và màu sắc.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YZA12345678" title="Cách xào mực thập cẩm ngon | Stir-fried Squid with Mixed Vegetables Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'rau-cu-xao-thap-cam',
  name: 'Rau củ xào thập cẩm',
  category: ['Món xào', 'Món rau củ'],
  image: 'images/121.jpg',
  description: 'Rau củ xào thập cẩm – món ăn thanh mát, giòn ngon, kết hợp nhiều loại rau củ tươi như cà rốt, bông cải, ớt chuông, nấm và hành tây, xào nhanh với gia vị đơn giản, thích hợp ăn kèm cơm trắng hoặc làm món chay.',
  ingredients: [
    { name: 'Cà rốt', amount: '1 củ (thái sợi hoặc lát mỏng)' },
    { name: 'Bông cải xanh / bông cải trắng', amount: '150g (tách nhỏ)' },
    { name: 'Ớt chuông đỏ và vàng', amount: '1 quả mỗi loại (thái lát)' },
    { name: 'Hành tây', amount: '1/2 củ (thái múi cau)' },
    { name: 'Nấm đông cô hoặc nấm kim châm', amount: '100g (rửa sạch, cắt nếu cần)' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Dầu mè', amount: '1/2 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc chảo lên bếp, cho dầu ăn và tỏi băm vào phi thơm.',
    'Cho cà rốt, bông cải và nấm vào xào khoảng 3-5 phút, đảo đều trên lửa lớn.',
    'Thêm ớt chuông và hành tây vào xào tiếp khoảng 2-3 phút đến khi rau củ chín nhưng vẫn giữ độ giòn.',
    'Nêm nước tương, hạt nêm, muối, đường và tiêu xay, đảo đều khoảng 1-2 phút.',
    'Tắt bếp, rưới một ít dầu mè lên trên (nếu dùng), trộn đều nhẹ tay.',
    'Dọn ra đĩa và thưởng thức nóng cùng cơm trắng hoặc dùng làm món chay.'
  ],
  notes: 'Rau củ xào thập cẩm ngon khi rau củ giòn, tươi, màu sắc hấp dẫn và gia vị hài hòa. Có thể thêm các loại hạt như hạt điều rang để tăng hương vị và dinh dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZAB12345678" title="Cách xào rau củ thập cẩm | Stir-fried Mixed Vegetables Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-rau-ngot',
  name: 'Canh rau ngót',
  category: ['Món canh', 'Món rau củ', 'Món thịt heo'],
  image: 'images/122.jpg',
  description: 'Canh rau ngót – món canh truyền thống thanh mát của Việt Nam, vị ngọt tự nhiên từ rau ngót kết hợp với thịt băm hoặc tôm, thích hợp dùng trong bữa cơm hằng ngày, giúp giải nhiệt và bổ dưỡng.',
  ingredients: [
    { name: 'Rau ngót', amount: '300g (nhặt lá, rửa sạch, vò nhẹ)' },
    { name: 'Thịt heo băm hoặc tôm bóc vỏ', amount: '150g' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Nước lọc', amount: '700ml' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho thịt băm (hoặc tôm) vào xào sơ đến khi săn lại, nêm chút muối và hạt nêm.',
    'Đổ nước lọc vào nồi, đun sôi.',
    'Khi nước sôi, cho rau ngót vào, đảo nhẹ để rau chìm đều trong nước.',
    'Nấu thêm 3–5 phút đến khi rau chín mềm, nêm lại nước mắm và tiêu cho vừa ăn.',
    'Tắt bếp, múc canh ra tô và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Canh rau ngót ngon khi nước trong, vị ngọt thanh, rau chín mềm nhưng không nát. Có thể thêm tôm khô hoặc xương ninh để tăng vị ngọt tự nhiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/QWE12345678" title="Cách nấu canh rau ngót ngon ngọt | Sweetleaf Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-bi-dao-nau-xuong',
  name: 'Canh bí đao nấu xương',
  category: ['Món canh', 'Món rau củ', 'Món thịt heo'],
  image: 'images/123.jpg',
  description: 'Canh bí đao nấu xương – món canh thanh mát, ngọt tự nhiên từ bí đao kết hợp với nước hầm xương heo, thích hợp cho những bữa cơm gia đình, giúp giải nhiệt và cung cấp nhiều dinh dưỡng.',
  ingredients: [
    { name: 'Xương heo (xương ống hoặc xương sườn)', amount: '400g (rửa sạch, chần qua nước sôi)' },
    { name: 'Bí đao', amount: '500g (gọt vỏ, bỏ ruột, cắt miếng vừa ăn)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Ngò rí', amount: 'vài cọng (trang trí)' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Nước lọc', amount: '1 lít' }
  ],
  steps: [
    'Bắc nồi nước, cho xương heo đã chần vào hầm khoảng 30–40 phút cho ra nước ngọt, hớt bọt thường xuyên để nước trong.',
    'Khi xương đã mềm, cho bí đao vào nấu tiếp khoảng 10 phút đến khi bí vừa chín tới, không bị nát.',
    'Nêm muối, hạt nêm và nước mắm cho vừa ăn.',
    'Thêm hành lá, tiêu xay, tắt bếp.',
    'Múc ra tô, rắc thêm ngò rí lên trên và thưởng thức nóng.'
  ],
  notes: 'Canh bí đao nấu xương ngon khi nước trong, vị ngọt thanh từ bí và xương. Có thể cho thêm tôm khô hoặc gừng lát để tăng hương vị, hoặc thay bằng xương gà nếu thích.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JKL12345678" title="Cách nấu canh bí đao xương heo thanh mát | Winter Melon Soup with Pork Bones Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-rau-muong-nau-tom',
  name: 'Canh rau muống nấu tôm',
  category: ['Món canh', 'Món rau củ', 'Món tôm'],
  image: 'images/124.jpg',
  description: 'Canh rau muống nấu tôm – món canh dân dã, thanh mát với vị ngọt tự nhiên từ tôm tươi và vị giòn nhẹ của rau muống, thích hợp cho những bữa cơm gia đình, đặc biệt vào những ngày hè nóng bức.',
  ingredients: [
    { name: 'Rau muống', amount: '300g (nhặt lá, cắt khúc vừa ăn)' },
    { name: 'Tôm tươi', amount: '150g (bóc vỏ, bỏ đầu, băm hoặc giã nhuyễn)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '700ml' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho tôm băm vào xào sơ đến khi tôm chín và dậy mùi thơm.',
    'Đổ nước lọc vào nồi, đun sôi rồi hớt bọt để nước trong.',
    'Khi nước sôi, cho rau muống vào, đảo nhẹ và nấu thêm 2–3 phút đến khi rau vừa chín xanh.',
    'Nêm muối, hạt nêm, đường và nước mắm cho vừa ăn.',
    'Tắt bếp, rắc ít tiêu (nếu thích), múc ra tô và dùng nóng với cơm trắng.'
  ],
  notes: 'Canh rau muống nấu tôm ngon khi nước trong, vị ngọt thanh, rau vẫn giữ được màu xanh và độ giòn. Có thể thay tôm tươi bằng tôm khô nếu muốn vị đậm đà hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNO12345678" title="Cách nấu canh rau muống với tôm ngon ngọt | Water Spinach Soup with Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-bi-do-nau-tom',
  name: 'Canh bí đỏ nấu tôm',
  category: ['Món canh', 'Món rau củ', 'Món tôm'],
  image: 'images/16.jpg',
  description: 'Canh bí đỏ nấu tôm – món canh ngọt thanh, béo nhẹ, kết hợp vị bùi của bí đỏ với vị ngọt tự nhiên của tôm, mang lại bữa cơm gia đình ấm cúng và đầy dinh dưỡng.',
  ingredients: [
    { name: 'Bí đỏ', amount: '400g (gọt vỏ, bỏ ruột, cắt miếng vừa ăn)' },
    { name: 'Tôm tươi', amount: '150g (bóc vỏ, bỏ đầu, băm hoặc giã nhuyễn)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '800ml' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho tôm băm vào xào sơ đến khi tôm chín và dậy mùi thơm.',
    'Đổ nước lọc vào nồi, đun sôi rồi hớt bọt để nước trong.',
    'Cho bí đỏ vào nấu đến khi bí chín mềm (khoảng 10 phút).',
    'Nêm muối, hạt nêm, đường và nước mắm cho vừa ăn.',
    'Thêm hành lá, tiêu xay (nếu thích), tắt bếp.',
    'Múc canh ra tô và thưởng thức nóng cùng cơm trắng.'
  ],
  notes: 'Canh bí đỏ nấu tôm ngon khi bí mềm, nước trong, vị ngọt thanh và béo nhẹ. Có thể thêm ít gừng băm để giảm mùi tanh của tôm và tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PQR12345678" title="Cách nấu canh bí đỏ với tôm ngon ngọt | Pumpkin Soup with Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-rau-den-thit-bam',
  name: 'Canh rau dền thịt băm',
  category: ['Món canh', 'Món rau củ', 'Món thịt heo'],
  image: 'images/125.jpg',
  description: 'Canh rau dền thịt băm – món canh dân dã, thanh mát với vị ngọt tự nhiên của rau dền kết hợp cùng thịt heo băm, mang lại hương vị nhẹ nhàng và bổ dưỡng cho bữa cơm gia đình.',
  ingredients: [
    { name: 'Rau dền', amount: '300g (nhặt lá, rửa sạch)' },
    { name: 'Thịt heo băm', amount: '150g' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '700ml' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho thịt băm vào xào sơ đến khi săn lại, nêm chút muối và hạt nêm.',
    'Đổ nước lọc vào nồi, đun sôi rồi hớt bọt để nước trong.',
    'Khi nước sôi, cho rau dền vào, đảo nhẹ để rau chìm đều trong nước.',
    'Nấu thêm 3–5 phút cho rau chín mềm, nêm nước mắm và tiêu cho vừa ăn.',
    'Tắt bếp, múc canh ra tô và dùng nóng với cơm trắng.'
  ],
  notes: 'Canh rau dền thịt băm ngon khi nước canh có màu đỏ tím tự nhiên, vị ngọt thanh, rau mềm vừa phải. Có thể thay thịt heo bằng tôm băm để tăng vị ngọt và dinh dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/STU12345678" title="Cách nấu canh rau dền thịt băm thanh mát | Amaranth Soup with Minced Pork Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ga-ham-hat-sen',
  name: 'Canh gà hầm hạt sen',
  category: ['Món canh', 'Món rau củ', 'Món thịt gà'],
  image: 'images/126.jpg',
  description: 'Canh gà hầm hạt sen – món canh bổ dưỡng, thơm ngon với thịt gà mềm, hạt sen bùi béo cùng vị ngọt thanh từ các loại rau củ, giúp bồi bổ sức khỏe và tăng cường sức đề kháng.',
  ingredients: [
    { name: 'Gà ta', amount: '1/2 con (khoảng 600g, chặt khúc vừa ăn)' },
    { name: 'Hạt sen tươi hoặc khô', amount: '100g (nếu dùng hạt sen khô thì ngâm mềm trước)' },
    { name: 'Cà rốt', amount: '1 củ (gọt vỏ, cắt khoanh tròn)' },
    { name: 'Nấm hương hoặc nấm đông cô', amount: '5 tai (ngâm nở, cắt đôi)' },
    { name: 'Củ sen', amount: '100g (gọt vỏ, cắt lát mỏng – tùy chọn)' },
    { name: 'Hành tím', amount: '2 củ (đập dập, phi thơm)' },
    { name: 'Nước lọc', amount: '1.2 lít' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường phèn hoặc đường cát', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hành lá và ngò rí', amount: 'vài nhánh (trang trí)' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Rửa sạch thịt gà, chần qua nước sôi 2–3 phút để loại bỏ bọt và mùi hôi, vớt ra để ráo.',
    'Hạt sen ngâm mềm (nếu dùng loại khô), rửa sạch để ráo.',
    'Bắc nồi, cho ít dầu ăn và hành tím phi thơm, cho gà vào đảo sơ cho săn lại.',
    'Thêm hạt sen, cà rốt, nấm và củ sen vào nồi, đổ nước lọc vào hầm với lửa nhỏ khoảng 40–50 phút đến khi gà chín mềm và hạt sen bùi.',
    'Nêm muối, hạt nêm, đường phèn và nước mắm cho vừa miệng.',
    'Tắt bếp, rắc hành lá, ngò rí và tiêu xay lên trên.',
    'Múc canh ra tô, dùng nóng để cảm nhận vị ngọt thanh, bổ dưỡng.'
  ],
  notes: 'Canh gà hầm hạt sen ngon khi nước trong, vị ngọt thanh từ gà và hạt sen, thịt gà mềm không nát, hạt sen chín bùi. Có thể thêm táo đỏ hoặc kỷ tử để tăng hương vị và giá trị dinh dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VWX12345678" title="Cách nấu canh gà hầm hạt sen bổ dưỡng | Chicken Soup with Lotus Seeds Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ca-chua-trung',
  name: 'Canh cà chua trứng',
  category: ['Món canh','Món trứng', 'Món rau củ'],
  image: 'images/127.jpg',
  description: 'Canh cà chua trứng – món canh đơn giản, dễ nấu nhưng rất đưa cơm, với vị chua nhẹ của cà chua hòa quyện cùng vị béo thơm của trứng, mang đến hương vị thanh mát và ấm cúng cho bữa ăn gia đình.',
  ingredients: [
    { name: 'Cà chua', amount: '2 quả (rửa sạch, cắt múi cau)' },
    { name: 'Trứng gà', amount: '2 quả (đánh tan nhẹ)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '700ml' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho cà chua vào xào đến khi mềm và ra màu đỏ đẹp.',
    'Đổ nước lọc vào nồi, đun sôi khoảng 3–5 phút.',
    'Từ từ đổ trứng đã đánh tan vào nồi, vừa đổ vừa khuấy nhẹ để tạo vân trứng đẹp mắt.',
    'Nêm muối, hạt nêm, đường và nước mắm cho vừa miệng.',
    'Thêm hành lá, tiêu xay, tắt bếp.',
    'Múc canh ra tô, dùng nóng với cơm trắng.'
  ],
  notes: 'Canh cà chua trứng ngon khi nước trong, vị chua ngọt dịu, trứng chín mềm và nổi vân đều. Có thể thêm đậu hũ non hoặc rau mùi để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYZ12345678" title="Cách nấu canh cà chua trứng đơn giản ngon miệng | Tomato Egg Soup Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-khoai-mo-nau-tom',
  name: 'Canh khoai mỡ nấu tôm',
  category: ['Món canh', 'Món rau củ', 'Món tôm'],
  image: 'images/128.jpg',
  description: 'Canh khoai mỡ nấu tôm – món canh dân dã, đặc trưng miền Trung với vị ngọt thanh từ tôm và độ sánh mịn của khoai mỡ. Món ăn mang hương vị ấm áp, dễ ăn, thích hợp cho bữa cơm gia đình hàng ngày.',
  ingredients: [
    { name: 'Khoai mỡ', amount: '300g (gọt vỏ, nạo hoặc tán nhuyễn)' },
    { name: 'Tôm tươi', amount: '150g (bóc vỏ, băm nhỏ hoặc giã nhuyễn)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '800ml' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và hành tím vào phi thơm.',
    'Cho tôm băm vào xào săn, nêm một chút muối và hạt nêm.',
    'Đổ nước lọc vào nồi, đun sôi.',
    'Khi nước sôi, cho khoai mỡ đã nạo vào, khuấy đều tay để khoai tan và tạo độ sánh.',
    'Nấu thêm 5–7 phút cho khoai chín mềm, nêm lại gia vị vừa ăn.',
    'Thêm hành lá và tiêu xay, tắt bếp.',
    'Múc canh ra tô, dùng nóng với cơm trắng.'
  ],
  notes: 'Canh khoai mỡ ngon khi có màu tím sánh đẹp, vị ngọt thanh tự nhiên từ khoai và tôm. Có thể dùng tôm khô thay tôm tươi để tạo vị đậm hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ABC12398765" title="Cách nấu canh khoai mỡ tôm ngon ngọt, sánh mịn | Purple Yam Soup with Shrimp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-cua-mong-toi',
  name: 'Canh cua mồng tơi',
  category: ['Món canh', 'Món rau củ'],
  image: 'images/129.jpg',
  description: 'Canh cua mồng tơi – món ăn dân dã, thanh mát, đặc trưng của mùa hè Việt Nam. Thịt cua ngọt tự nhiên hòa cùng vị nhớt nhẹ, mát lành của rau mồng tơi tạo nên bát canh thơm ngon, giải nhiệt hiệu quả.',
  ingredients: [
    { name: 'Cua đồng', amount: '300g (xay nhuyễn, lọc lấy nước)' },
    { name: 'Rau mồng tơi', amount: '1 bó (nhặt lá non, rửa sạch)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Nước lọc', amount: '800ml' }
  ],
  steps: [
    'Phi thơm hành tím với dầu ăn trong nồi.',
    'Cho phần gạch cua vào xào nhẹ tay đến khi dậy mùi thơm, trút ra chén riêng.',
    'Đổ phần nước cua đã lọc vào nồi, nấu nhỏ lửa đến khi thịt cua nổi lên thành từng mảng (không khuấy để tránh vỡ riêu cua).',
    'Khi riêu cua nổi, nhẹ nhàng cho rau mồng tơi vào, nấu thêm 2–3 phút cho rau vừa chín tới.',
    'Nêm muối, hạt nêm và nước mắm cho vừa miệng.',
    'Thêm phần gạch cua đã xào lên trên, tắt bếp.',
    'Múc canh ra tô, dùng nóng với cơm trắng.'
  ],
  notes: 'Canh cua mồng tơi ngon khi riêu cua nổi chắc, nước canh ngọt thanh, rau chín vừa không bị nát. Có thể thêm mướp hương hoặc rau đay để tăng vị ngon.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XYZ98765432" title="Cách nấu canh cua mồng tơi ngon ngọt thanh mát | Crab Soup with Malabar Spinach" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-kim-chi',
  name: 'Canh kim chi (Kimchi Jjigae)',
  category: ['Món canh'],
  image: 'images/130.jpg',
  description: 'Canh kim chi (Kimchi Jjigae) – món canh cay nóng đặc trưng của Hàn Quốc, kết hợp giữa kim chi chua cay, thịt ba chỉ béo ngậy và đậu hũ mềm, mang đến hương vị đậm đà và ấm bụng trong những ngày lạnh.',
  ingredients: [
    { name: 'Kim chi cải thảo', amount: '200g (cắt nhỏ)' },
    { name: 'Thịt ba chỉ heo', amount: '150g (cắt miếng vừa ăn)' },
    { name: 'Đậu hũ non', amount: '1 hộp (cắt khúc)' },
    { name: 'Hành boa rô hoặc hành tây', amount: '1/2 củ (thái lát)' },
    { name: 'Ớt bột Hàn Quốc (gochugaru)', amount: '1 muỗng canh' },
    { name: 'Tương ớt Hàn Quốc (gochujang)', amount: '1 muỗng canh' },
    { name: 'Nước dùng (hoặc nước lọc)', amount: '700ml' },
    { name: 'Tỏi', amount: '2 tép (băm nhỏ)' },
    { name: 'Nước mắm hoặc nước tương', amount: '1 muỗng canh' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Đường', amount: '1/2 muỗng cà phê (tùy chọn để giảm vị chua)' }
  ],
  steps: [
    'Bắc nồi lên bếp, cho dầu ăn và tỏi băm vào phi thơm.',
    'Thêm thịt ba chỉ vào xào đến khi săn lại và ra mỡ.',
    'Cho kim chi vào xào cùng, thêm ớt bột và tương ớt Hàn Quốc, đảo đều cho thấm vị.',
    'Đổ nước dùng vào nồi, đun sôi khoảng 10–15 phút cho hương vị hòa quyện.',
    'Thêm đậu hũ non và hành tây, nấu thêm 5 phút.',
    'Nêm lại với nước mắm (hoặc nước tương) và đường cho vừa miệng.',
    'Tắt bếp, rắc hành lá lên trên và thưởng thức nóng.'
  ],
  notes: 'Canh kim chi ngon nhất khi dùng với cơm trắng hoặc mì Hàn Quốc. Có thể thêm xúc xích, nấm kim châm, hoặc trứng gà để biến tấu theo sở thích.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DEF12345678" title="Cách nấu canh kim chi chuẩn vị Hàn Quốc | Kimchi Jjigae Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-ngao-nau-dua',
  name: 'Canh ngao nấu dứa',
  category: ['Món canh', 'Món rau củ'],
  image: 'images/131.jpg',
  description: 'Canh ngao nấu dứa – món canh thanh mát, chua nhẹ, thơm dịu mùi dứa kết hợp cùng vị ngọt tự nhiên của ngao. Đây là món ăn giải nhiệt, dễ nấu và rất thích hợp trong những ngày hè nóng bức.',
  ingredients: [
    { name: 'Ngao (nghêu)', amount: '500g (ngâm nước muối cho sạch cát)' },
    { name: 'Dứa (thơm)', amount: '1/4 quả (thái lát mỏng)' },
    { name: 'Cà chua', amount: '2 quả (bổ múi cau)' },
    { name: 'Hành tím', amount: '1 củ (băm nhỏ)' },
    { name: 'Hành lá hoặc thì là', amount: '1 ít (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Nước lọc', amount: '700ml' }
  ],
  steps: [
    'Ngao rửa sạch, cho vào nồi luộc đến khi ngao mở miệng. Lọc lấy phần nước luộc, để lắng cát rồi gạn lấy nước trong.',
    'Tách lấy thịt ngao, bỏ vỏ.',
    'Bắc nồi, cho dầu ăn và hành tím vào phi thơm.',
    'Cho cà chua và dứa vào xào cho ra màu và mùi thơm.',
    'Đổ nước luộc ngao vào nồi, đun sôi.',
    'Khi nước sôi, cho thịt ngao vào, nêm muối, hạt nêm và nước mắm cho vừa miệng.',
    'Thêm hành lá hoặc thì là, tắt bếp.',
    'Múc canh ra tô, dùng nóng với cơm trắng.'
  ],
  notes: 'Canh ngao nấu dứa ngon khi nước trong, vị chua nhẹ tự nhiên, ngao ngọt và không bị tanh. Có thể thêm chút ớt hoặc sả để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GHI65432109" title="Cách nấu canh ngao nấu dứa chua ngọt thanh mát | Clam Soup with Pineapple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-xuong-khoai-tay',
  name: 'Canh xương khoai tây',
  category: ['Món canh', 'Món rau củ','Món thịt heo'],
  image: 'images/132.jpg',
  description: 'Canh xương khoai tây – món canh đậm đà, bổ dưỡng với vị ngọt thanh từ xương hầm và vị bùi béo của khoai tây, cà rốt. Món ăn thích hợp cho bữa cơm gia đình, đặc biệt trong những ngày se lạnh.',
  ingredients: [
    { name: 'Xương heo (xương ống hoặc xương sườn)', amount: '400g (chặt khúc, trụng sơ qua nước sôi)' },
    { name: 'Khoai tây', amount: '2 củ (gọt vỏ, cắt khúc vừa ăn)' },
    { name: 'Cà rốt', amount: '1 củ (gọt vỏ, cắt khoanh hoặc khúc)' },
    { name: 'Hành tím', amount: '1 củ (nướng hoặc băm nhỏ)' },
    { name: 'Hành lá và ngò rí', amount: 'vài nhánh (cắt nhỏ để rắc lên trên)' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Nước lọc', amount: '1 lít' }
  ],
  steps: [
    'Trụng xương heo qua nước sôi 2–3 phút để loại bỏ bọt bẩn, sau đó rửa sạch lại bằng nước lạnh.',
    'Cho xương vào nồi, thêm nước lọc và hành tím nướng, hầm trong khoảng 30–40 phút cho xương mềm và nước ngọt.',
    'Vớt bọt trong quá trình hầm để nước canh trong.',
    'Thêm khoai tây và cà rốt vào nồi, tiếp tục nấu đến khi chín mềm.',
    'Nêm muối, hạt nêm, đường và nước mắm cho vừa miệng.',
    'Rắc hành lá, ngò rí lên trên trước khi tắt bếp.',
    'Múc canh ra tô, dùng nóng với cơm trắng.'
  ],
  notes: 'Canh xương khoai tây ngon khi nước trong, vị ngọt thanh tự nhiên, khoai và cà rốt mềm nhưng không nát. Có thể cho thêm hành tây hoặc củ cải để tăng vị ngọt.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JKL98765432" title="Cách nấu canh xương khoai tây ngon ngọt, bổ dưỡng | Pork Bone Soup with Potatoes and Carrots" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'canh-bong-tha',
  name: 'Canh bóng thả',
  category: ['Món canh', 'Món rau củ','Món thịt heo'],
  image: 'images/133.jpg',
  description: 'Canh bóng thả – món canh cổ truyền của ẩm thực miền Bắc, thường xuất hiện trong mâm cỗ ngày Tết. Bóng bì heo giòn mềm, hòa quyện cùng hương vị ngọt thanh của nước dùng xương và rau củ, tạo nên món canh thanh nhã và tinh tế.',
  ingredients: [
    { name: 'Bóng bì heo (da heo khô)', amount: '100g (ngâm nở, cắt miếng vừa ăn)' },
    { name: 'Xương heo (hoặc gà)', amount: '400g (đun lấy nước dùng)' },
    { name: 'Tôm khô', amount: '20g (ngâm mềm, giã sơ)' },
    { name: 'Cà rốt', amount: '1 củ (tỉa hoa, cắt lát mỏng)' },
    { name: 'Su hào', amount: '1/2 củ (tỉa hoa hoặc cắt miếng nhỏ)' },
    { name: 'Đậu Hà Lan', amount: '50g' },
    { name: 'Nấm hương khô', amount: '5 tai (ngâm nở, cắt đôi)' },
    { name: 'Giò lụa', amount: '100g (cắt lát mỏng)' },
    { name: 'Hành lá và rau mùi', amount: 'vài nhánh (cắt nhỏ để rắc lên trên)' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Đường', amount: '1/4 muỗng cà phê' },
    { name: 'Nước lọc', amount: '1.2 lít (hoặc nước dùng xương)' }
  ],
  steps: [
    'Hầm xương heo (hoặc gà) trong 40–60 phút để lấy nước dùng trong và ngọt.',
    'Ngâm bóng bì trong nước ấm cho nở, sau đó trụng sơ qua nước sôi, vắt ráo và cắt miếng vừa ăn.',
    'Cho cà rốt, su hào, nấm hương, tôm khô vào nồi nước dùng, nấu đến khi chín mềm.',
    'Thêm bóng bì, giò lụa và đậu Hà Lan vào nấu thêm 3–5 phút.',
    'Nêm muối, hạt nêm, nước mắm và đường cho vừa miệng.',
    'Trước khi tắt bếp, cho hành lá và rau mùi vào để dậy hương.',
    'Múc canh ra tô, dùng nóng hoặc ấm tùy thích.'
  ],
  notes: 'Canh bóng thả ngon khi nước trong, vị ngọt thanh, bóng bì mềm mà không dai, rau củ chín tới và giữ được màu sắc tươi. Có thể thay xương heo bằng gà để vị nhẹ và thanh hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNO12345678" title="Cách nấu canh bóng thả truyền thống ngon thanh mát | Vietnamese Pork Skin Soup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bong-bi-xao-toi',
  name: 'Bông bí xào tỏi',
  category: ['Món xào', 'Món rau củ'],
  image: 'images/134.jpg',
  description: 'Bông bí xào tỏi – món ăn dân dã, thanh mát và thơm nức mùi tỏi phi. Vị ngọt tự nhiên của bông bí hòa quyện cùng hương thơm đặc trưng của tỏi, tạo nên món xào đơn giản mà hấp dẫn, rất đưa cơm.',
  ingredients: [
    { name: 'Bông bí', amount: '300g (rửa sạch, bỏ nhụy, để ráo)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1.5 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê (tùy chọn)' }
  ],
  steps: [
    'Bông bí nhặt sạch, bỏ phần cuống già và nhụy, rửa nhẹ tay rồi để ráo nước.',
    'Bắc chảo lên bếp, cho dầu ăn và tỏi băm vào phi thơm vàng.',
    'Cho bông bí vào xào nhanh tay trên lửa lớn để giữ độ giòn và màu xanh.',
    'Nêm muối, hạt nêm và nước mắm, đảo đều cho thấm gia vị.',
    'Xào khoảng 2–3 phút đến khi bông bí vừa chín tới thì tắt bếp.',
    'Rắc chút tiêu xay, dọn ra đĩa và thưởng thức khi còn nóng.'
  ],
  notes: 'Bông bí xào tỏi ngon khi bông giữ được độ giòn, không bị ra nước, mùi tỏi thơm và vị vừa ăn. Có thể thêm ít ớt hoặc tóp mỡ xào cùng để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PQR98765432" title="Cách làm bông bí xào tỏi ngon giòn, hấp dẫn | Stir-fried Pumpkin Blossoms with Garlic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cai-ngong-xao-thit-bo',
  name: 'Cải ngồng xào thịt bò',
  category: ['Món xào', 'Món rau củ', 'Món thịt bò'],
  image: 'images/135.jpg',
  description: 'Cải ngồng xào thịt bò – món ăn thơm ngon, bổ dưỡng, kết hợp giữa vị ngọt mềm của thịt bò và vị giòn thanh của cải ngồng. Món xào này rất thích hợp cho bữa cơm gia đình hoặc bữa ăn nhanh giàu dinh dưỡng.',
  ingredients: [
    { name: 'Cải ngồng', amount: '300g (rửa sạch, cắt khúc khoảng 5–6cm)' },
    { name: 'Thịt bò thăn hoặc phi lê', amount: '150g (thái mỏng, ướp gia vị)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '1.5 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Ướp thịt bò với 1/2 phần tỏi băm, dầu hào, nước tương, hạt nêm, đường và tiêu trong 10–15 phút cho thấm.',
    'Bắc chảo lên bếp, cho dầu ăn và phần tỏi còn lại vào phi thơm.',
    'Cho thịt bò vào xào nhanh tay trên lửa lớn đến khi vừa chín tái, sau đó trút ra đĩa để riêng.',
    'Dùng lại chảo, cho cải ngồng vào xào nhanh tay với chút muối hoặc hạt nêm.',
    'Khi rau gần chín, cho thịt bò vào đảo đều, nêm nếm lại cho vừa miệng.',
    'Xào thêm 30 giây rồi tắt bếp, dọn ra đĩa và thưởng thức ngay.'
  ],
  notes: 'Cải ngồng xào thịt bò ngon khi rau còn giòn xanh, thịt bò mềm không bị dai. Có thể thêm ớt hoặc gừng để tăng hương vị. Xào trên lửa lớn giúp giữ màu rau tươi đẹp.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/STU45678901" title="Cách làm cải ngồng xào thịt bò thơm ngon, dinh dưỡng | Stir-fried Chinese Broccoli with Beef" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ca-tim-xao-thit-bam',
  name: 'Cà tím xào thịt bằm',
  category: ['Món xào', 'Món rau củ', 'Món thịt heo'],
  image: 'images/136.jpg',
  description: 'Cà tím xào thịt bằm – món ăn dân dã, dễ làm nhưng đậm đà hương vị. Cà tím mềm thơm hòa quyện với thịt bằm béo ngậy, thấm đều gia vị, rất thích hợp dùng với cơm trắng nóng.',
  ingredients: [
    { name: 'Cà tím', amount: '2–3 quả (khoảng 400g, cắt khúc vừa ăn, ngâm nước muối loãng 10 phút để bớt thâm)' },
    { name: 'Thịt heo bằm', amount: '150g' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Ớt (tùy chọn)', amount: '1 quả (thái lát)' }
  ],
  steps: [
    'Bắc chảo lên bếp, cho 1 muỗng canh dầu ăn vào, phi thơm tỏi băm.',
    'Cho thịt bằm vào xào tơi, nêm chút nước mắm và hạt nêm, xào đến khi thịt săn lại rồi trút ra chén.',
    'Cho thêm dầu ăn vào chảo, cho cà tím vào xào đến khi hơi mềm.',
    'Thêm ít nước (khoảng 30ml) để cà tím chín mềm mà không bị khô.',
    'Khi cà chín, cho thịt bằm vào đảo đều, nêm lại với nước mắm, đường và tiêu cho vừa ăn.',
    'Thêm hành lá và ớt vào, đảo đều rồi tắt bếp.',
    'Dọn ra đĩa, ăn nóng cùng cơm trắng.'
  ],
  notes: 'Cà tím nên xào trên lửa vừa để chín mềm mà không bị nát. Có thể thêm chút dầu hào để món ăn đậm đà hơn. Nếu muốn ăn cay, thêm ớt hoặc sa tế khi xào.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MNO65432109" title="Cách làm cà tím xào thịt bằm thơm ngon đậm đà | Stir-fried Eggplant with Minced Pork Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'muop-xao-long-ga',
  name: 'Mướp xào lòng gà',
  category: ['Món xào', 'Món rau củ', 'Món thịt gà'],
  image: 'images/137.jpg',
  description: 'Mướp xào lòng gà – món ăn dân dã đậm đà, kết hợp giữa vị ngọt thanh của mướp và hương thơm béo của lòng gà. Món ăn này rất đưa cơm và giàu dinh dưỡng, thích hợp cho bữa cơm gia đình.',
  ingredients: [
    { name: 'Mướp hương', amount: '2 quả (khoảng 400g, gọt vỏ, cắt xéo vừa ăn)' },
    { name: 'Lòng gà (tim, gan, mề)', amount: '200g (rửa sạch, cắt miếng vừa ăn)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt khúc)' },
    { name: 'Dầu ăn', amount: '1.5 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Ớt (tùy chọn)', amount: '1 quả (thái lát)' }
  ],
  steps: [
    'Sơ chế lòng gà: rửa sạch với muối và gừng, trụng qua nước sôi 1 phút để khử mùi, sau đó cắt nhỏ vừa ăn.',
    'Ướp lòng gà với 1/2 phần tỏi băm, 1/2 muỗng cà phê nước mắm và ít tiêu trong 10 phút.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm phần tỏi còn lại.',
    'Cho lòng gà vào xào săn, đến khi tim, gan, mề chín đều và dậy mùi thơm.',
    'Thêm mướp vào xào nhanh tay, nêm nước mắm, hạt nêm và đường cho vừa miệng.',
    'Khi mướp vừa chín tới (vẫn còn xanh và giòn nhẹ), cho hành lá và ớt vào đảo đều rồi tắt bếp.',
    'Dọn ra đĩa, rắc thêm ít tiêu và thưởng thức nóng với cơm trắng.'
  ],
  notes: 'Không nên xào mướp quá lâu để tránh bị nhũn và ra nước. Có thể thêm vài lát gừng khi xào lòng gà để khử mùi hôi và tăng hương vị. Món này ăn nóng là ngon nhất.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/QRS56789012" title="Cách làm mướp xào lòng gà thơm ngon hấp dẫn | Stir-fried Loofah with Chicken Giblets Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'thit-bo-xao-bong-thien-ly',
  name: 'Thịt bò xào bông thiên lý',
  category: ['Món xào','Món thịt bò'],
  image: 'images/138.jpg',
  description: 'Thịt bò xào bông thiên lý – món ăn thanh mát, thơm ngon với thịt bò mềm ngọt kết hợp cùng bông thiên lý giòn xanh, mang đến hương vị dân dã, đậm đà và bổ dưỡng.',
  ingredients: [
    { name: 'Thịt bò thăn', amount: '200g (thái mỏng, ướp gia vị)' },
    { name: 'Bông thiên lý', amount: '150g (rửa sạch, để ráo)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Hành lá (tùy chọn)', amount: '1 nhánh (cắt nhỏ)' }
  ],
  steps: [
    'Ướp thịt bò với 1/2 phần tỏi băm, dầu hào, nước mắm, hạt nêm, đường và tiêu trong 15 phút cho thấm gia vị.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm phần tỏi còn lại.',
    'Cho thịt bò vào xào nhanh tay trên lửa lớn đến khi thịt vừa chín tái thì trút ra đĩa.',
    'Dùng lại chảo, cho bông thiên lý vào xào với một ít hạt nêm, đảo đều đến khi bông vừa chín tới, vẫn giữ màu xanh.',
    'Cho thịt bò trở lại chảo, đảo đều thêm 30 giây cho các nguyên liệu hòa quyện.',
    'Nêm nếm lại cho vừa ăn, rắc hành lá (nếu có) rồi tắt bếp.',
    'Dọn ra đĩa, dùng nóng với cơm trắng hoặc làm món ăn kèm bữa tiệc.'
  ],
  notes: 'Xào bông thiên lý trên lửa lớn và nhanh tay để giữ được màu xanh đẹp và độ giòn. Thịt bò chỉ nên xào tái để không bị dai. Có thể thêm vài lát ớt để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TUV67890123" title="Cách làm thịt bò xào bông thiên lý thơm ngon hấp dẫn | Stir-fried Beef with Tonkin Jasmine Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'rau-muong-xao-oc-mong-tay',
  name: 'Rau muống xào ốc móng tay',
  category: ['Món xào', 'Hải sản'],
  image: 'images/139.jpg',
  description: 'Rau muống xào ốc móng tay – món ăn dân dã, thơm ngon với hương vị biển hòa quyện cùng vị giòn xanh của rau muống. Món này rất thích hợp cho bữa cơm thường ngày hoặc dùng làm món nhậu hấp dẫn.',
  ingredients: [
    { name: 'Ốc móng tay', amount: '300g (làm sạch, chần sơ qua nước sôi)' },
    { name: 'Rau muống', amount: '300g (nhặt lá, cắt khúc vừa ăn)' },
    { name: 'Tỏi', amount: '4 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Ớt (tùy chọn)', amount: '1 quả (thái lát)' }
  ],
  steps: [
    'Sơ chế ốc móng tay: rửa sạch bằng nước muối loãng và gừng, trụng sơ qua nước sôi khoảng 30 giây, sau đó để ráo.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho ốc móng tay vào xào nhanh tay với lửa lớn, nêm 1/2 lượng nước mắm và hạt nêm, đảo đều đến khi ốc vừa chín tới thì trút ra đĩa.',
    'Dùng lại chảo, cho rau muống vào xào với phần nước mắm, đường và hạt nêm còn lại. Đảo đều tay để rau chín đều và vẫn giữ màu xanh.',
    'Khi rau gần chín, cho ốc móng tay vào đảo chung trong khoảng 30 giây – 1 phút để thấm đều gia vị.',
    'Rắc tiêu, thêm ớt nếu thích, đảo đều rồi tắt bếp.',
    'Dọn ra đĩa và thưởng thức nóng cùng cơm trắng hoặc làm món nhậu.'
  ],
  notes: 'Nên xào nhanh tay trên lửa lớn để rau muống giữ được màu xanh và độ giòn. Ốc móng tay không nên xào quá lâu để tránh bị dai. Có thể thêm ít dầu hào để món ăn thêm đậm đà.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VWX78901234" title="Cách làm rau muống xào ốc móng tay ngon giòn hấp dẫn | Stir-fried Morning Glory with Razor Clams Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'bun-gao-xao-thap-cam',
  name: 'Bún gạo xào thập cẩm',
  category: ['Món xào'],
  image: 'images/140.jpg',
  description: 'Bún gạo xào thập cẩm – món ăn hấp dẫn, đầy màu sắc với sợi bún dai nhẹ, rau củ giòn ngọt và thịt, tôm thơm ngon hòa quyện trong gia vị đậm đà. Thích hợp cho bữa sáng, bữa trưa hoặc tiệc nhẹ.',
  ingredients: [
    { name: 'Bún gạo khô', amount: '200g (ngâm nước ấm 15 phút cho mềm, để ráo)' },
    { name: 'Tôm tươi', amount: '100g (bóc vỏ, rút chỉ lưng)' },
    { name: 'Thịt heo nạc hoặc thịt bò', amount: '100g (thái mỏng)' },
    { name: 'Trứng gà', amount: '1 quả (đánh tan, chiên mỏng rồi thái sợi)' },
    { name: 'Cà rốt', amount: '1/2 củ (thái sợi)' },
    { name: 'Bắp cải hoặc cải thảo', amount: '100g (thái nhỏ)' },
    { name: 'Hành tây', amount: '1/2 củ (thái múi cau mỏng)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước tương', amount: '1 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm tỏi băm.',
    'Cho thịt và tôm vào xào săn, nêm chút nước tương và hạt nêm cho thấm, sau đó trút ra đĩa.',
    'Dùng lại chảo, cho cà rốt, hành tây và bắp cải vào xào đến khi rau hơi mềm.',
    'Thêm bún gạo đã ngâm vào, đảo nhẹ tay để sợi bún không bị nát.',
    'Cho thịt, tôm đã xào cùng trứng sợi vào, nêm nước tương, dầu hào, đường và tiêu. Xào đều tay cho gia vị thấm đều.',
    'Nếu bún hơi khô, có thể rưới thêm 1–2 muỗng canh nước để bún mềm và dễ trộn hơn.',
    'Xào thêm 1–2 phút, nêm nếm lại cho vừa miệng rồi tắt bếp. Dọn ra đĩa, rắc hành lá hoặc tiêu tùy thích.'
  ],
  notes: 'Bún gạo nên ngâm vừa đủ mềm để khi xào không bị nát. Có thể thay tôm, thịt bằng chả lụa, xúc xích hoặc nấm để làm món chay. Xào trên lửa lớn giúp bún khô ráo, không dính chảo.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YZA89012345" title="Cách làm bún gạo xào thập cẩm ngon đơn giản tại nhà | Stir-fried Vermicelli with Mixed Ingredients Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'ech-xao-sa-ot',
  name: 'Ếch xào sả ớt',
  category: ['Món xào','Món mặn'],
  image: 'images/141.jpg',
  description: 'Ếch xào sả ớt – món ăn dân dã, thơm ngon với thịt ếch săn chắc, thấm vị cay nồng của sả và ớt. Món này cực kỳ bắt cơm và thường xuất hiện trong các bữa ăn gia đình Việt Nam.',
  ingredients: [
    { name: 'Thịt ếch', amount: '500g (làm sạch, chặt miếng vừa ăn)' },
    { name: 'Sả cây', amount: '3 cây (băm nhuyễn hoặc thái lát mỏng)' },
    { name: 'Ớt tươi', amount: '2 quả (băm nhỏ hoặc thái lát)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Dầu hào', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Nghệ (tùy chọn)', amount: '1/2 muỗng cà phê bột nghệ để tạo màu đẹp' }
  ],
  steps: [
    'Rửa sạch thịt ếch với muối và gừng để khử mùi tanh, để ráo.',
    'Ướp ếch với nước mắm, dầu hào, hạt nêm, đường, tiêu, nghệ (nếu dùng), 1/2 lượng sả, tỏi và ớt băm. Để thấm gia vị khoảng 20 phút.',
    'Bắc chảo lên bếp, cho dầu ăn vào, phi thơm hành tím, tỏi và phần sả còn lại đến khi vàng thơm.',
    'Cho thịt ếch đã ướp vào xào trên lửa lớn, đảo đều cho đến khi thịt săn lại.',
    'Giảm nhỏ lửa, đậy nắp và xào thêm 5–7 phút cho thịt ếch chín mềm và thấm gia vị.',
    'Nêm nếm lại cho vừa miệng, thêm ớt tươi vào đảo đều rồi tắt bếp.',
    'Dọn ra đĩa, rắc thêm ít tiêu hoặc hành lá cho thơm, dùng nóng với cơm trắng.'
  ],
  notes: 'Có thể thêm chút bột nghệ hoặc sa tế để món ăn có màu đẹp và vị cay nồng hơn. Không nên xào quá lâu để tránh thịt ếch bị khô. Nếu thích vị béo, có thể thêm ít nước cốt dừa vào giai đoạn cuối.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZAB90123456" title="Cách làm ếch xào sả ớt thơm ngon đậm đà | Stir-fried Frog with Lemongrass and Chili Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},





];

// ------------ DOM references ------------
const cardsContainer = document.getElementById('cardsContainer');
const categoryList = document.getElementById('categoryList');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const yearSpan = document.getElementById('year');

// ------------ State ------------
let selectedCategories = new Set();
let searchQuery = '';
let debounceTimer = null;
const DEBOUNCE_MS = 400;

// ------------ Helpers ------------
function normalize(str) {
  return (str || '').toLowerCase();
}

// ------------ Render Cards ------------
function createCard(dish) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}">
    <div class="card-body">
      <h3 class="card-title">${dish.name}</h3>
      <div class="card-sub">${dish.category.join(', ')}</div>
    </div>
  `;
  card.addEventListener('click', () => openModal(dish.id));
  return card;
}

function renderCards(list) {
  cardsContainer.innerHTML = '';
  if (list.length === 0) {
    cardsContainer.innerHTML = `<div style="padding:40px;text-align:center;color:var(--muted)">Không có món phù hợp.</div>`;
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(d => frag.appendChild(createCard(d)));
  cardsContainer.appendChild(frag);
}

// ------------ Category Filter ------------
function getUniqueCategories() {
  const set = new Set();
  dishes.forEach(d => d.category.forEach(c => set.add(c)));
  return Array.from(set).sort();
}

function renderCategoryCheckboxes() {
  const cats = getUniqueCategories();
  categoryList.innerHTML = cats
    .map(
      cat => `
      <label class="category-item">
        <input type="checkbox" value="${cat}">
        <span>${cat}</span>
      </label>
    `
    )
    .join('');

  categoryList.querySelectorAll('input').forEach(cb => {
    cb.addEventListener('change', e => {
      if (e.target.checked) selectedCategories.add(e.target.value);
      else selectedCategories.delete(e.target.value);
      filterAndRender();
    });
  });
}

// ------------ Filtering Logic ------------
function matchesSearch(dish, q) {
  if (!q) return true;
  const Q = normalize(q);
  if (Q.length === 1)
    return (
      normalize(dish.name).startsWith(Q) ||
      dish.ingredients.some(i => normalize(i.name).startsWith(Q))
    );
  return (
    normalize(dish.name).includes(Q) ||
    dish.ingredients.some(i => normalize(i.name).includes(Q))
  );
}

function matchesCategories(dish) {
  if (selectedCategories.size === 0) return true;
  return Array.from(selectedCategories).some(c => dish.category.includes(c));
}

function filterAndRender() {
  const q = searchQuery.trim();
  const filtered = dishes.filter(
    d => matchesSearch(d, q) && matchesCategories(d)
  );
  renderCards(filtered);
}

// ------------ Search debounce ------------
function handleSearchInput(e) {
  const val = e.target.value;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchQuery = val;
    filterAndRender();
  }, DEBOUNCE_MS);
}

// ------------ Modal ------------
function openModal(id) {
  const d = dishes.find(x => x.id === id);
  if (!d) return;
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2>${d.name}</h2>
      <p class="muted">${d.category.join(', ')} — ${d.description}</p>
      <img src="${d.image}" alt="${d.name}">
      <h4>Nguyên liệu</h4>
      <ul>${d.ingredients.map(i => `<li>${i.name} — ${i.amount}</li>`).join('')}</ul>
      <h4>Các bước</h4>
      <ol>${d.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <p><strong>Lưu ý:</strong> ${d.notes}</p>
      <div class="video-wrapper">
        ${d.video}
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}

// ------------ Theme ------------
const toggle = document.getElementById('modeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// ------------ Init ------------
function init() {
  renderCategoryCheckboxes();
  renderCards(dishes);
  searchInput.addEventListener('input', handleSearchInput);
  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
  yearSpan.textContent = new Date().getFullYear();
}

init();
