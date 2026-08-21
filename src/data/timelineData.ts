export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  location: string;
  badge?: string;
  imageKey?: string;
  detailDoc?: {
    context: string;
    strategicSignificance: string;
    quote?: string;
  };
}

export const TIMELINE_1965_1968: TimelineEvent[] = [
  {
    year: '1965',
    date: '05/1965 & 08/1965',
    title: 'Núi Thành – Vạn Tường',
    subtitle: 'Mở màn đập tan ưu thế vũ khí Mỹ',
    description: 'Trận Núi Thành (5/1965) khẳng định quân dân miền Nam dám đánh và biết thắng quân Mỹ. Trận Vạn Tường (8/1965) bẻ gãy cuộc hành quân "Ánh sáng sao" của lính thủy đánh bộ Mỹ.',
    keyPoints: [
      'Núi Thành: Trận đầu diệt gọn một đại đội lính thủy đánh bộ Mỹ',
      'Vạn Tường: "Trận Ấp Bắc đối với quân Mỹ", đập tan huyền thoại bất khả chiến bại',
      'Mở ra phong trào "Tìm Mỹ mà đánh, lùng ngụy mà diệt" trên toàn miền Nam'
    ],
    location: 'Quảng Nam – Quảng Ngãi',
    badge: 'Chiến Thắng Mở Đầu'
  },
  {
    year: '1965',
    date: '10 – 11/1965',
    title: 'Chiến Dịch Plâyme',
    subtitle: 'Đòn sấm sét giữa núi rừng Tây Nguyên',
    description: 'Chiến dịch đầu tiên bộ đội chủ lực ta chủ động mở trên chiến trường Tây Nguyên, tiêu diệt sinh lực địch, đánh thiệt hại nặng Sư đoàn Không vận số 1 kỵ binh bay của Mỹ.',
    keyPoints: [
      'Đánh trúng lực lượng tinh nhuệ có trang bị trực thăng cơ động cao nhất của Mỹ',
      'Củng cố vững chắc thế trận bàn đạp chiến lược tại địa bàn Tây Nguyên',
      'Khẳng định nghệ thuật tác chiến hiệp đồng và thế trận lòng dân'
    ],
    location: 'Gia Lai (Tây Nguyên)',
    badge: 'Đòn Sấm Sét'
  },
  {
    year: '1966–1967',
    date: 'Mùa khô 1965–1966 & 1966–1967',
    title: 'Bẻ Gãy Hai Mùa Khô',
    subtitle: 'Đập tan cuộc phản công chiến lược lớn nhất',
    description: 'Mỹ huy động hàng trăm nghìn quân mở các cuộc hành quân "Tìm và diệt", đặc biệt là cuộc hành quân Junction City (45.000 quân) nhằm vào căn cứ Dương Minh Châu nhưng đều bị bẻ gãy.',
    keyPoints: [
      'Đánh bại kế hoạch giành lại quyền chủ động chiến trường của tướng Westmoreland',
      'Giữ vững vững chắc các vùng căn cứ giải phóng và đầu não kháng chiến',
      'Lực lượng vũ trang 3 thứ quân trưởng thành vượt bậc trong chiến đấu'
    ],
    location: 'Đông Nam Bộ & Toàn Miền Nam',
    badge: 'Chiến Lược Toàn Diện'
  },
  {
    year: '1968',
    date: 'Đêm 30 rạng 31/01/1968',
    title: 'Tổng Tiến Công & Nổi Dậy Tết Mậu Thân',
    subtitle: 'Đòn giáng bất ngờ làm lung lay ý chí xâm lược của Mỹ',
    description: 'Cuộc tổng tiến công đồng loạt vào các sào huyệt trung tâm: Tòa Đại sứ Mỹ, Dinh Độc Lập, Bộ Tổng tham mưu Sài Gòn, sân bay Tân Sơn Nhất và hơn 60 thành phố, thị xã toàn miền Nam.',
    keyPoints: [
      'Gây chấn động dư luận nước Mỹ và làm đảo lộn toàn bộ chiến lược chiến tranh',
      'Buộc Tổng thống Johnson phải tuyên bố ngừng ném bom miền Bắc từ vĩ tuyến 20 trở ra',
      'Chấp nhận ngồi vào bàn đàm phán bốn bên tại Hội nghị Paris'
    ],
    location: 'Sài Gòn – Huế – Đà Nẵng & Toàn Miền Nam',
    badge: 'Bước Ngoặt Lịch Sử'
  }
];

export const NEWSPAPER_1969_1972: TimelineEvent[] = [
  {
    year: '1969',
    title: 'Khôi Phục Miền Bắc & Di Chúc Bác Hồ',
    subtitle: 'Vừa hàn gắn vết thương chiến tranh, vừa dốc lòng cho tiền tuyến',
    description: 'Miền Bắc khôi phục cơ sở hạ tầng, đẩy mạnh phong trào "Thóc không thiếu một cân, quân không thiếu một người". Toàn Đảng, toàn dân biến đau thương thành hành động cách mạng sau ngày Bác Hồ đi xa.',
    keyPoints: [
      'Phục hồi sản xuất nông nghiệp, công nghiệp và giao thông huyết mạch',
      'Chi viện quy mô lớn cho tuyến đường Trường Sơn huyền thoại',
      'Củng cố thế trận phòng không ba thứ quân chuẩn bị cho các đợt tập kích mới'
    ],
    location: 'Hậu phương miền Bắc'
  },
  {
    year: '1971',
    date: 'Đầu năm 1971',
    title: 'Chiến Dịch Đường 9 – Nam Lào',
    subtitle: 'Đập tan cuộc hành quân Lam Sơn 719',
    description: 'Mỹ – ngụy huy động lực lượng thiết giáp, không vận ồ ạt đánh vào Đường 9 nhằm cắt đứt huyết mạch Trường Sơn, nhưng bị quân ta giáng trả tơi bời, bắt sống đại tá Nguyễn Văn Thọ.',
    keyPoints: [
      'Bảo vệ trọn vẹn tuyến hành lang chi viện chiến lược Bắc – Nam',
      'Đánh dấu sự phá sản hoàn toàn của công thức "Bộ binh Sài Gòn + Hỏa lực Mỹ"',
      'Mở rộng vùng giải phóng Trung – Hạ Lào'
    ],
    location: 'Khu vực Đường 9 – Nam Lào'
  },
  {
    year: '1972',
    date: 'Tháng 4 – Tháng 11/1972',
    title: 'Chiến Tranh Phá Hoại Lần Thứ Hai',
    subtitle: 'Mỹ leo thang hủy diệt miền Bắc bằng vũ khí công nghệ cao',
    description: 'Mỹ dùng máy bay B-52, bom thông minh dẫn đường bằng laser, rải thủy lôi phong tỏa Cảng Hải Phòng và các cửa sông hòng ngăn chặn triệt để nguồn viện trợ.',
    keyPoints: [
      'Miền Bắc sơ tán hàng trăm ngàn dân khỏi các đô thị lớn',
      'Quân dân Thủ đô bí mật hoàn thiện phương án đón đánh B-52',
      'Tập dượt kinh nghiệm từ các trung đoàn tên lửa chiến đấu ở Khu 4'
    ],
    location: 'Hà Nội, Hải Phòng và toàn miền Bắc'
  }
];

export const SPRING_1975_CAMPAIGNS: TimelineEvent[] = [
  {
    year: '1975',
    date: '10/03/1975',
    title: 'Chiến Thắng Buôn Ma Thuột',
    subtitle: 'Đòn điểm huyệt chiến lược giải phóng Tây Nguyên',
    description: 'Nghệ thuật nghi binh xuất sắc đánh lừa địch ở Pleiku - Kon Tum, bất ngờ tập kích hạ gục Sở chỉ huy Sư đoàn 23 ngụy tại Buôn Ma Thuột.',
    keyPoints: [
      'Gây rối loạn toàn bộ hệ thống phòng thủ chiến lược của địch',
      'Buộc đối phương phải tháo chạy hỗn loạn khỏi Cao nguyên miền Trung'
    ],
    location: 'Tây Nguyên'
  },
  {
    year: '1975',
    date: '26/03/1975',
    title: 'Giải Phóng Cố Đô Huế',
    subtitle: 'Chiến dịch Trị – Thiên toàn thắng',
    description: 'Cờ Mặt trận Dân tộc Giải phóng tung bay trên đỉnh Cột cờ Phu Văn Lâu, quét sạch toàn bộ cụm quân địch bảo vệ cửa ngõ miền Trung.',
    keyPoints: [
      'Đập tan tuyến lá chắn quân sự mạnh phía Bắc miền Nam',
      'Tạo bàn đạp thần tốc cô lập căn cứ liên hợp Đà Nẵng'
    ],
    location: 'Thừa Thiên – Huế'
  },
  {
    year: '1975',
    date: '29/03/1975',
    title: 'Giải Phóng Thành Phố Đà Nẵng',
    subtitle: 'Căn cứ quân sự liên hợp lớn thứ hai tan rã',
    description: 'Chỉ trong 33 giờ, các cánh quân giải phóng từ nhiều hướng đã đồng loạt tràn vào giải phóng thành phố cảng Đà Nẵng với hơn 10 vạn quân địch.',
    keyPoints: [
      'Làm thay đổi căn bản tương quan lực lượng có lợi tuyệt đối cho ta',
      'Bộ Chính trị quyết định: "Thần tốc, thần tốc hơn nữa; táo bạo, táo bạo hơn nữa"'
    ],
    location: 'Đà Nẵng'
  },
  {
    year: '1975',
    date: '26/04 – 30/04/1975',
    title: 'Chiến Dịch Hồ Chí Minh Lịch Sử',
    subtitle: '5 cánh quân hội tụ giải phóng Sài Gòn – Gia Định',
    description: 'Các quân đoàn chủ lực kết hợp lực lượng đặc công, biệt động từ 5 hướng đồng loạt tiến công thẳng vào 5 mục tiêu đầu não của chính quyền Sài Gòn.',
    keyPoints: [
      'Tổng tiến công thần tốc đập tan phòng tuyến Xuân Lộc và bao vây đô thành',
      '11 giờ 30 phút ngày 30/4/1975: Cờ giải phóng kiêu hãnh tung bay trên Dinh Độc Lập'
    ],
    location: 'Sài Gòn – Gia Định'
  }
];
