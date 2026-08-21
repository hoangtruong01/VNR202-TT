import { DetailContent } from '@/components/ui/DetailDrawer';

export interface StrategicPillar {
  id: string;
  number: string;
  category: string;
  headline: string;
  leadQuote?: string;
  content: string;
  subText?: string;
  badge: string;
  visualType: 'quote-highlight' | 'three-steps' | 'long-term-timeline' | 'three-prongs' | 'four-tasks' | 'dual-regions';
  visualData?: any;
}

export interface ValidationMilestone {
  period: string;
  title: string;
  description: string;
  badge: string;
}

export const PARTY_LINE_OPENING = {
  title: 'ĐƯỜNG LỐI KHÁNG CHIẾN CHỐNG MỸ, CỨU NƯỚC',
  subtitle: 'ĐƯỜNG LỐI CHIẾN LƯỢC TOÀN DIỆN CỦA ĐẢNG (1965 — 1975)',
  period: '1965 → 1975',
  summary:
    'Khi chiến tranh lan rộng ra cả nước, Đảng xác định đường lối chiến lược nhằm huy động sức mạnh của cả hai miền, kết hợp đấu tranh quân sự, chính trị và ngoại giao để đánh bại chiến tranh xâm lược của Mỹ.',
  conferences: [
    {
      name: 'Hội nghị Trung ương 11',
      time: 'Tháng 3 / 1965',
      decision: 'Hạ quyết tâm động viên lực lượng cả nước kiên quyết đánh thắng giặc Mỹ xâm lược.'
    },
    {
      name: 'Hội nghị Trung ương 12',
      time: 'Tháng 12 / 1965',
      decision: 'Hoàn chỉnh và phát triển đường lối chiến lược kháng chiến trong tình hình mới.'
    }
  ]
};

export const PARTY_LINE_CONTEXT = {
  title: 'VÌ SAO ĐƯỜNG LỐI PHẢI ĐƯỢC HOÀN CHỈNH?',
  year: '1965',
  south: {
    region: 'MIỀN NAM',
    tag: '“Chiến tranh cục bộ”',
    description:
      'Sau khi “Chiến tranh đặc biệt” thất bại nghiêm trọng, Mỹ chuyển sang “Chiến tranh cục bộ”. Ngày 8/3/1965, quân chiến đấu Mỹ đổ bộ vào Đà Nẵng, trực tiếp tham chiến ở miền Nam.'
  },
  north: {
    region: 'MIỀN BẮC',
    tag: '“Chiến tranh phá hoại”',
    description:
      'Sau “sự kiện Vịnh Bắc Bộ” tháng 8/1964, Mỹ mở rộng chiến tranh phá hoại miền Bắc. Mục tiêu quan trọng là phá hoại tiềm lực miền Bắc và ngăn chặn sự chi viện cho miền Nam.'
  },
  conclusion:
    'Hội nghị Trung ương 11 (3/1965) và Trung ương 12 (12/1965) xác định những chủ trương quan trọng để lãnh đạo cuộc kháng chiến trong tình hình mới.'
};

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'pillar-01',
    number: '01',
    category: 'Quyết tâm chiến lược',
    headline: 'ĐÁNH MỸ — THẮNG MỸ',
    leadQuote: '“Quyết tâm đánh thắng giặc Mỹ xâm lược.”',
    content:
      'Đảng xác định phải phát động cuộc kháng chiến chống Mỹ, cứu nước trên phạm vi cả nước, với quyết tâm đánh bại cuộc chiến tranh xâm lược của Mỹ trong bất kỳ tình huống nào.',
    subText:
      'Dù Mỹ đưa lực lượng viễn chinh trực tiếp tham chiến, Đảng đánh giá ta vẫn có cơ sở và sức mạnh để giữ vững thế chủ động và đánh Mỹ.',
    badge: 'Ý CHÍ TOÀN DÂN',
    visualType: 'quote-highlight'
  },
  {
    id: 'pillar-02',
    number: '02',
    category: 'Mục tiêu chiến lược',
    headline: 'BẢO VỆ — GIẢI PHÓNG — THỐNG NHẤT',
    content:
      'Kiên quyết đánh bại cuộc chiến tranh xâm lược của Mỹ, bảo vệ miền Bắc, giải phóng miền Nam và tiến tới hòa bình, thống nhất nước nhà.',
    subText: 'Ba mục tiêu gắn kết chặt chẽ, tạo thành một chỉnh thể chiến lược thống nhất.',
    badge: 'MỤC TIÊU TỐI THƯỢNG',
    visualType: 'three-steps',
    visualData: {
      steps: [
        { label: 'BẢO VỆ MIỀN BẮC', desc: 'Bảo vệ căn cứ địa cách mạng cả nước' },
        { label: 'GIẢI PHÓNG MIỀN NAM', desc: 'Đập tan ách thống trị xâm lược của Mỹ' },
        { label: 'TIẾN TỚI THỐNG NHẤT', desc: 'Thu non sông trọn vẹn về một mối' }
      ]
    }
  },
  {
    id: 'pillar-03',
    number: '03',
    category: 'Phương châm chiến lược',
    headline: 'ĐÁNH LÂU DÀI',
    content:
      'Đường lối không chỉ xác định khả năng kháng chiến lâu dài mà còn chủ trương tập trung lực lượng của cả hai miền, mở những cuộc tiến công lớn khi thời cơ xuất hiện.',
    subText: 'Kết hợp kiên trì bám trụ với chớp thời cơ tạo bước ngoặt quyết định.',
    badge: 'PHƯƠNG PHÁP NGHỆ THUẬT',
    visualType: 'long-term-timeline',
    visualData: {
      principles: [
        'Dựa vào sức mình là chính',
        'Càng đánh càng mạnh',
        'Tranh thủ thời cơ giành thắng lợi quyết định'
      ],
      flow: ['XÂY DỰNG LỰC LƯỢNG', 'TẠO THẾ', 'NẮM THỜI CƠ', 'THẮNG LỢI QUYẾT ĐỊNH (1975)']
    }
  },
  {
    id: 'pillar-04',
    number: '04',
    category: 'Tư tưởng chỉ đạo đối với miền Nam',
    headline: 'GIỮ VỮNG THẾ TIẾN CÔNG',
    content:
      'Giữ vững và phát triển thế tiến công, kiên quyết tiến công và liên tục tiến công trên mọi mặt trận.',
    subText: 'Đẩy mạnh kết hợp chặt chẽ giữa các phương thức đấu tranh và các vùng chiến lược.',
    badge: 'TIỀN TUYẾN LỚN',
    visualType: 'three-prongs',
    visualData: {
      threeProngs: [
        { name: 'QUÂN SỰ', role: 'Đấu tranh tiêu diệt sinh lực địch trên chiến trường.' },
        { name: 'CHÍNH TRỊ', role: 'Phát huy sức mạnh nổi dậy của quần chúng nhân dân.' },
        { name: 'BINH VẬN', role: 'Tác động làm tan rã hàng ngũ quân đội đối phương.' }
      ],
      threeZones: ['RỪNG NÚI', 'NÔNG THÔN ĐỒNG BẰNG', 'ĐÔ THỊ']
    }
  },
  {
    id: 'pillar-05',
    number: '05',
    category: 'Tư tưởng chỉ đạo đối với miền Bắc',
    headline: 'VỪA XÂY DỰNG — VỪA CHIẾN ĐẤU — VỪA CHI VIỆN',
    content:
      'Chuyển hướng kinh tế và quốc phòng trong điều kiện chiến tranh, vừa sản xuất vừa kiên cường đánh trả chiến tranh phá hoại, hoàn thành xuất sắc nghĩa vụ hậu phương lớn.',
    subText: 'Chi viện toàn diện sức người, sức của cho tiền tuyến miền Nam.',
    badge: 'HẬU PHƯƠNG LỚN',
    visualType: 'four-tasks',
    visualData: {
      tasks: [
        {
          no: '01',
          title: 'XÂY DỰNG KINH TẾ',
          desc: 'Tiếp tục xây dựng miền Bắc trong điều kiện chiến tranh.'
        },
        {
          no: '02',
          title: 'TĂNG CƯỜNG QUỐC PHÒNG',
          desc: 'Tiến hành chiến tranh nhân dân chống chiến tranh phá hoại.'
        },
        {
          no: '03',
          title: 'CHI VIỆN MIỀN NAM',
          desc: 'Động viên sức người, sức của cho tiền tuyến.'
        },
        {
          no: '04',
          title: 'CHỦ ĐỘNG ĐỐI PHÓ',
          desc: 'Chuẩn bị đánh bại nếu Mỹ mở rộng chiến tranh.'
        }
      ],
      route: ['MIỀN BẮC', 'NGƯỜI + LƯƠNG THỰC + VẬT CHẤT + VŨ KHÍ', 'TRƯỜNG SƠN', 'MIỀN NAM']
    }
  },
  {
    id: 'pillar-06',
    number: '06',
    category: 'Mối quan hệ và nhiệm vụ cách mạng của hai miền',
    headline: 'TIỀN TUYẾN LỚN ↔ HẬU PHƯƠNG LỚN',
    content:
      'Hai miền thực hiện hai nhiệm vụ chiến lược khác nhau nhưng cùng hướng tới một mục tiêu chung tối thượng: giải phóng miền Nam, bảo vệ miền Bắc, thống nhất non sông.',
    subText: 'Mối quan hệ biện chứng máu thịt không thể tách rời.',
    badge: 'MỘT CHIẾN LƯỢC TOÀN CỤC',
    visualType: 'dual-regions',
    visualData: {
      south: {
        title: 'MIỀN NAM',
        role: 'Tiền tuyến lớn',
        mission: 'Giữ thế tiến công, đánh bại các chiến lược chiến tranh của Mỹ, giải phóng miền Nam.'
      },
      north: {
        title: 'MIỀN BẮC',
        role: 'Hậu phương lớn',
        mission: 'Bảo vệ, xây dựng và chi viện cho tiền tuyến; tiếp tục xây dựng chủ nghĩa xã hội.'
      },
      unity: 'GIẢI PHÓNG MIỀN NAM — THỐNG NHẤT ĐẤT NƯỚC'
    }
  }
];

export const PARTY_LINE_VALIDATIONS: ValidationMilestone[] = [
  {
    period: '1965 – 1968',
    title: 'Đánh bại “Chiến tranh cục bộ”',
    description: 'Bẻ gãy 2 cuộc phản công mùa khô của Mỹ, tạo bước ngoặt quyết định với Mậu Thân 1968.',
    badge: 'BƯỚC NGOẶT ĐẦU TIÊN'
  },
  {
    period: '1969 – 1972',
    title: 'Đối phó “Việt Nam hóa chiến tranh”',
    description: 'Đối phó “Việt Nam hóa chiến tranh”, tiếp tục giữ thế tiến công.',
    badge: 'GIỮ VỮNG THẾ TRẬN'
  },
  {
    period: '1972',
    title: 'Điện Biên Phủ trên không',
    description: 'Đập tan cuộc tập kích chiến lược B-52, buộc Mỹ ký Hiệp định Paris.',
    badge: 'CHIẾN THẮNG TRÊN BẦU TRỜI'
  },
  {
    period: '1973',
    title: 'Hiệp định Paris',
    description: 'Hiệp định Paris được ký kết, quân viễn chinh Mỹ phải rút toàn bộ về nước.',
    badge: 'MỸ RÚT QUÂN'
  },
  {
    period: '1975',
    title: 'Giải phóng miền Nam',
    description: 'Tổng tiến công và nổi dậy mùa Xuân, giải phóng miền Nam, non sông thống nhất.',
    badge: 'TOÀN THẮNG'
  }
];

export const PARTY_LINE_DRAWER_DATA: DetailContent = {
  title: 'Nghị Quyết Hội Nghị Trung Ương 11 & 12 (Năm 1965)',
  subtitle: 'Đường lối kháng chiến chống Mỹ, cứu nước trên phạm vi cả nước trong tình hình mới',
  category: 'VĂN KIỆN ĐẢNG TOÀN TẬP',
  year: '1965',
  context:
    'Đầu năm 1965, trước nguy cơ sụp đổ hoàn toàn của chính quyền Sài Gòn sau thất bại của "Chiến tranh đặc biệt", đế quốc Mỹ đã ồ ạt đưa quân viễn chinh vào trực tiếp tham chiến ở miền Nam, đồng thời phát động chiến tranh phá hoại bằng không quân và hải quân đối với miền Bắc. Ban Chấp hành Trung ương Đảng đã họp Hội nghị lần thứ 11 (tháng 3/1965) và lần thứ 12 (tháng 12/1965) nhằm phân tích sâu sắc cục diện chiến trường và đề ra đường lối chiến lược toàn diện cho toàn dân tộc.',
  strategicSignificance:
    'Nghị quyết Trung ương 11 và 12 là ngọn cờ dẫn đường soi sáng cho toàn Đảng, toàn quân, toàn dân ta kiên định vượt qua muôn vàn thử thách khốc liệt, lần lượt đánh bại từng chiến lược chiến tranh tàn bạo của đế quốc Mỹ, đi tới thắng lợi vĩ đại 30/4/1975.',
  quote: {
    text: 'Lúc này, chống Mỹ cứu nước là nhiệm vụ thiêng liêng nhất của mọi người Việt Nam yêu nước... Động viên lực lượng của cả nước, kiên quyết đánh thắng giặc Mỹ xâm lược trong mọi tình huống.',
    author: 'Nghị quyết Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 12 (12/1965)'
  },
  keyFacts: [
    'Khẳng định dù Mỹ đưa vào hàng chục vạn quân thì tương quan lực lượng cơ bản vẫn không thay đổi, ta vẫn giữ vững thế chủ động chiến lược.',
    'Xác định rõ ràng: Miền Nam là tiền tuyến lớn, Miền Bắc là hậu phương lớn của cuộc kháng chiến.',
    'Chủ trương chuyển hướng toàn bộ nền kinh tế và củng cố quốc phòng miền Bắc trong điều kiện thời chiến.',
    'Kết hợp nhuần nhuyễn 3 mũi giáp công: Quân sự, Chính trị và Binh vận trên cả 3 vùng chiến lược (Rừng núi, Đồng bằng, Đô thị).'
  ],
  sourceReference: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam & Văn kiện Đảng Toàn tập (Tập 26)'
};

export const PARTY_LINE_FOOTNOTE = {
  title: 'NGUỒN THAM KHẢO',
  source: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam.',
  chapter: 'Chương 2, II. Lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc và kháng chiến chống đế quốc Mỹ xâm lược, giải phóng miền Nam, thống nhất đất nước (1954–1975).',
  section: 'Mục 2. Lãnh đạo cách mạng cả nước (1965–1975).',
  topic: 'Phần: Đường lối kháng chiến chống Mỹ, cứu nước của Đảng.'
};
