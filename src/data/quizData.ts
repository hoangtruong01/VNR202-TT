export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const HISTORICAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Bác Hồ đã đưa ra lời dự báo thiên tài: "Ở Việt Nam, Mỹ nhất định thua, nhưng nó chỉ chịu thua sau khi thua trên bầu trời Hà Nội" vào năm nào?',
    options: ['Năm 1962', 'Năm 1965', 'Năm 1967', 'Năm 1972'],
    correctIndex: 2,
    explanation: 'Cuối năm 1967, khi làm việc với Tư lệnh Quân chủng Phòng không - Không quân Phùng Thế Tài, Chủ tịch Hồ Chí Minh đã khẳng định dự báo chiến lược thiên tài này.'
  },
  {
    id: 2,
    question: 'Trong 12 ngày đêm chiến dịch Điện Biên Phủ trên không (18 - 29/12/1972), quân và dân ta đã bắn rơi tổng cộng bao nhiêu pháo đài bay B-52?',
    options: ['16 chiếc', '34 chiếc', '81 chiếc', '5 chiếc'],
    correctIndex: 1,
    explanation: 'Trong tổng số 81 máy bay Mỹ bị tiêu diệt, có tới 34 chiếc siêu pháo đài bay chiến lược B-52 (chiếm tỉ lệ tổn thất chưa từng có trong lịch sử không quân Mỹ).'
  },
  {
    id: 3,
    question: 'Phi công đầu tiên của Không quân Nhân dân Việt Nam dùng tiêm kích MiG-21 bắn rơi pháo đài bay B-52 trong đêm 27/12/1972 là ai?',
    options: ['Anh hùng Phạm Tuân', 'Anh hùng Vũ Xuân Thiều', 'Anh hùng Nguyễn Văn Cốc', 'Anh hùng Trần Hanh'],
    correctIndex: 0,
    explanation: 'Đêm 27/12/1972, phi công Phạm Tuân cất cánh từ sân bay dã chiến Yên Bái đã lập nên kỳ tích bắn rơi B-52 đầu tiên bằng MiG-21 trên bầu trời miền Bắc.'
  },
  {
    id: 4,
    question: 'Chiến thắng "Điện Biên Phủ trên không" 1972 đã trực tiếp dẫn đến sự kiện lịch sử quan trọng nào vào đầu năm 1973?',
    options: [
      'Ký kết Hiệp định Genève',
      'Ký kết Hiệp định Paris (27/01/1973), buộc Mỹ rút quân hoàn toàn',
      'Đại thắng Mùa Xuân 1975',
      'Tổng tiến công Tết Mậu Thân'
    ],
    correctIndex: 1,
    explanation: 'Thất bại nặng nề trong chiến dịch Linebacker II buộc chính phủ Mỹ phải ký Hiệp định Paris ngày 27/01/1973, chấm dứt chiến tranh, rút hết quân đội về nước, tạo thời cơ quyết định để giải phóng hoàn toàn miền Nam.'
  }
];
