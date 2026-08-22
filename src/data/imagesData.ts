export interface HistoricalImage {
  id: string;
  url: string;
  fallbackUrl?: string;
  title: string;
  caption: string;
  year: string;
  source: string;
  sourceUrl?: string;
  tag: string;
}

export const HISTORICAL_IMAGES: Record<string, HistoricalImage> = {
  map_two_regions: {
    id: 'map_two_regions',
    url: '/images/ban_do_duong_ho_chi_minh.png',
    title: 'Bản đồ Toàn tuyến Đường Hồ Chí Minh',
    caption: 'Sơ đồ chi tiết toàn tuyến Đường Hồ Chí Minh nối liền từ Pác Bó (Cao Bằng) đến Đất Mũi (Cà Mau), huyết mạch giao thông và chi viện chiến lược cho chiến trường miền Nam.',
    year: '1965–1975',
    source: 'Bản đồ Toàn tuyến Đường Hồ Chí Minh',
    tag: 'Bản Đồ Toàn Tuyến'
  },
  hero_b52_flying: {
    id: 'hero_b52_flying',
    url: '/images/b52_bombs.jpg',
    title: 'Pháo đài bay chiến lược B-52 Stratofortress trút bom rải thảm',
    caption: 'Máy bay B-52 của Không quân Chiến lược Mỹ (SAC) trút mưa bom rải thảm trong chiến dịch Linebacker II (tháng 12/1972) nhằm hủy diệt Hà Nội và các đô thị miền Bắc.',
    year: '1972',
    source: 'Báo điện tử Tiền Phong (Tư liệu Không quân Hoa Kỳ)',
    sourceUrl: 'https://tienphong.vn/tham-bai-phao-dai-bay-b-52-o-ha-noi-qua-mat-nguoi-nga-post627520.tpo',
    tag: 'Pháo Đài Bay B-52'
  },
  hero_b52_ruins: {
    id: 'hero_b52_ruins',
    url: '/images/b52_wreckage.png',
    title: 'Nữ tự vệ canh gác bên xác máy bay B-52 rơi trên đường phố Hà Nội',
    caption: 'Nữ tự vệ Thủ đô mang súng đứng gác bên xác pháo đài bay B-52 của Mỹ bị quân và dân ta bắn rơi tại chỗ trên phố Hoàng Hoa Thám (Hà Nội) trong chiến dịch 12 ngày đêm tháng 12/1972.',
    year: '1972',
    source: 'Thông tấn xã Việt Nam (TTXVN) / Bảo tàng Lịch sử Quân sự Việt Nam',
    tag: 'Xác B-52 Rơi Tại Hà Nội'
  },
  phao_cao_xa_hanoi: {
    id: 'phao_cao_xa_hanoi',
    url: '/images/phao_cao_xa.png',
    title: 'Khẩu đội pháo cao xạ bảo vệ vùng trời Hà Nội',
    caption: 'Các chiến sĩ pháo cao xạ và tự vệ Thủ đô kiên cường bám chắc mâm pháo, phất cờ hiệu lệnh nhả đạn tạo nên lưới lửa phòng không tầm thấp và tầm trung dày đặc.',
    year: '1972',
    source: 'Thông tấn xã Việt Nam (TTXVN) / Bảo tàng PK-KQ',
    tag: 'Lưới Lửa Phòng Không'
  },
  kham_thien_1972: {
    id: 'kham_thien_1972',
    url: '/images/kham_thien.png',
    title: 'Phố Khâm Thiên sau đêm bom rải thảm 26/12/1972',
    caption: 'Đêm 26/12/1972, Mỹ huy động hàng chục máy bay B-52 ném bom rải thảm san bằng gần như toàn bộ dãy phố Khâm Thiên, cướp đi sinh mạng 287 đồng bào vô tội và làm bị thương hàng trăm người.',
    year: '1972',
    source: 'Thông tấn xã Việt Nam (TTXVN) / Ảnh tư liệu gốc',
    tag: 'Tội Ác Chiến Tranh'
  },
  quan_sat_may_bay: {
    id: 'quan_sat_may_bay',
    url: '/images/quan_sat_may_bay.png',
    title: 'Bộ đội phòng không và dân quân quan sát máy bay địch',
    caption: 'Các chiến sĩ kiên trì bám đài quan sát tiền tiêu, theo dõi sát sao đường bay của máy bay tiêm kích và pháo đài bay địch để kịp thời báo động cho trận địa tên lửa và pháo cao xạ.',
    year: '1965–1972',
    source: 'Thông tấn xã Việt Nam (TTXVN)',
    tag: 'Cảnh Giới Bầu Trời'
  },
  paris_accord_1973: {
    id: 'paris_accord_1973',
    url: '/images/ky_hiep_dinh_paris.png',
    title: 'Lễ ký kết Hiệp định Paris về Việt Nam (27/01/1973)',
    caption: 'Bộ trưởng Ngoại giao Nguyễn Duy Trinh (Việt Nam Dân chủ Cộng hòa) và phái đoàn các bên ký kết Hiệp định Paris tại Trung tâm Hội nghị Quốc tế Kléber. Mỹ cam kết chấm dứt mọi hành động chiến tranh và rút toàn bộ quân đội về nước.',
    year: '1973',
    source: 'Lưu trữ Bộ Ngoại giao Việt Nam / TTXVN',
    tag: 'Hiệp Định Paris'
  },
  danang_1965: {
    id: 'danang_1965',
    url: '/images/danang_1965.png',
    title: 'Quân viễn chinh Mỹ đổ bộ vào Đà Nẵng (8/3/1965)',
    caption: 'Tiểu đoàn Thủy quân Lục chiến số 3 của Mỹ đổ bộ lên bãi biển Red Beach (Đà Nẵng), đánh dấu bước chuyển sang chiến lược "Chiến tranh cục bộ".',
    year: '1965',
    source: 'Facebook: Nam Sài Gòn (Tư liệu 8/3/1965)',
    sourceUrl: 'https://www.facebook.com/namsaigonbtg7/photos/nga%CC%80y-na%CC%80y-n%C4%83m-x%C6%B0a-831965-thu%CC%89y-qu%C3%A2n-lu%CC%A3c-chi%C3%AA%CC%81n-my%CC%83-%C4%91%C3%B4%CC%89-b%C3%B4%CC%A3-va%CC%80o-b%C6%A1%CC%80-bi%C3%AA%CC%89n-%C4%91a%CC%80-/922943528369880/',
    tag: 'Bối Cảnh 1965'
  },
  ho_chi_minh_1967: {
    id: 'ho_chi_minh_1967',
    url: '/images/ho_chi_minh_pkkq_1967.png',
    title: 'Chủ tịch Hồ Chí Minh làm việc và động viên Bộ đội Phòng không - Không quân',
    caption: 'Chủ tịch Hồ Chí Minh thăm và động viên cán bộ, phi công, chiến sĩ Quân chủng Phòng không - Không quân. Người đưa ra dự báo thiên tài: "Sớm muộn rồi đế quốc Mỹ cũng sẽ đưa B-52 ra đánh Hà Nội, rồi có thua nó mới chịu thua... Ở Việt Nam, Mỹ nhất định thua, nhưng nó chỉ chịu thua sau khi thua trên bầu trời Hà Nội".',
    year: '1967',
    source: 'Thông tấn xã Việt Nam (TTXVN) / Viện Lịch sử Quân sự Việt Nam',
    tag: 'Dự Đoán Thiên Tài'
  },
  sam2_missile: {
    id: 'sam2_missile',
    url: '/images/sam2_missile.png',
    title: 'Tên lửa phòng không SAM-2 ("Rồng lửa Thăng Long")',
    caption: 'Bệ phóng tên lửa phòng không SAM-2 cùng kíp chiến đấu sẵn sàng điểm hỏa, tạo nên lưới lửa tầm cao thiêu cháy pháo đài bay B-52 trên bầu trời Hà Nội.',
    year: '1972',
    source: 'Bảo tàng Lực lượng Phòng không - Không quân / TTXVN',
    tag: 'Vũ Khí Khắc Tinh B-52'
  },
  pham_tuan_mig21: {
    id: 'pham_tuan_mig21',
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    title: 'Anh hùng Phạm Tuân bên tiêm kích MiG-21',
    caption: 'Đêm 27/12/1972, phi công Phạm Tuân cất cánh từ sân bay dã chiến Yên Bái, xuất sắc bắn rơi tại chỗ pháo đài bay B-52 đầu tiên bằng tiêm kích không đối không.',
    year: '1972',
    source: 'Bảo tàng Lịch sử Quân sự Việt Nam',
    tag: 'Chiến Công MiG-21'
  },
  victory_tank_390: {
    id: 'victory_tank_390',
    url: '/images/tank_390.jpg',
    title: 'Xe tăng 390 húc đổ cổng Dinh Độc Lập trưa 30/4/1975',
    caption: 'Khoảnh khắc lịch sử trưa 30/4/1975 khi xe tăng mang số hiệu 390 thuộc Lữ đoàn xe tăng 203 húc tung cánh cổng chính Dinh Độc Lập, cắm cờ chiến thắng kết thúc 21 năm kháng chiến chống Mỹ cứu nước.',
    year: '1975',
    source: 'Báo Lao Động (Tư liệu lịch sử 30/4/1975)',
    sourceUrl: 'https://laodong.vn/video/hanh-trinh-huc-do-cong-dinh-doc-lap-cua-hai-xe-tang-so-hieu-390-va-843-730684.ldo',
    tag: '30 Tháng 4 Toàn Thắng'
  },
  tran_dia_long_bien_1967: {
    id: 'tran_dia_long_bien_1967',
    url: '/images/tran_dia_long_bien_1967.png',
    title: 'Trận chiến đấu bảo vệ cầu Long Biên (27/5/1967)',
    caption: 'Chiến sĩ pháo cao xạ tại trận địa Gia Thượng - Gia Lâm tranh thủ đọc báo giữa giờ chiến đấu bảo vệ huyết mạch cầu Long Biên trước các đợt tập kích phá hoại của không quân Mỹ năm 1967.',
    year: '1967',
    source: 'Ảnh tư liệu lịch sử / Bảo tàng Quân chủng PK-KQ',
    tag: 'Bảo Vệ Cầu Long Biên'
  },
  khau_doi_cao_xa_ha_noi: {
    id: 'khau_doi_cao_xa_ha_noi',
    url: '/images/khau_doi_cao_xa_ha_noi.jpg',
    title: 'Khẩu đội pháo phòng không canh giữ bầu trời Thủ đô',
    caption: 'Khẩu đội pháo phòng không ngụy trang cành lá cẩn mật, mắt dõi theo mục tiêu trên bầu trời, tạo nên mạng lưới phòng không nhân dân nhiều tầng nhiều lớp bảo vệ Hà Nội.',
    year: '1967–1972',
    source: 'Tư liệu Thông tấn xã Việt Nam (TTXVN)',
    tag: 'Lực Lượng Phòng Không'
  },
  xac_may_bay_pho_ha_noi: {
    id: 'xac_may_bay_pho_ha_noi',
    url: '/images/xac_may_bay_pho_ha_noi.png',
    title: 'Xác pháo đài bay B-52 rơi trên đường phố Hà Nội',
    caption: 'Xác máy bay ném bom chiến lược B-52 của Mỹ bị quân và dân Thủ đô bắn rơi tại chỗ, nằm ngổn ngang trên đường phố Hà Nội trong sự chứng kiến của các chiến sĩ và đồng bào.',
    year: '1972',
    source: 'Thông tấn xã Việt Nam (TTXVN)',
    tag: 'Hiện Thực Đập Tan B-52'
  }
};
