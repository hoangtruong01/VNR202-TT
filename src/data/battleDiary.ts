export interface BattleDay {
  dayNumber: number;
  date: string;
  headline: string;
  summary: string;
  b52Downed: number;
  tacticalAction: string;
  heroicStory?: string;
  highlight?: boolean;
}

export const TWELVE_DAYS_DIARY: BattleDay[] = [
  {
    dayNumber: 1,
    date: '18/12/1972',
    headline: 'Phát Súng Mở Màn & B-52 Đầu Tiên Rơi Tại Chỗ',
    summary: '19h40: Đài radar quốc gia phát hiện các tốp B-52 đầu tiên. Lúc 20h13, Tiểu đoàn 59 (Trung đoàn 261) phóng đạn bắn rơi tại chỗ pháo đài bay B-52 đầu tiên trên cánh đồng Chuôm (Đông Anh, Hà Nội).',
    b52Downed: 3,
    tacticalAction: 'Đập tan huyền thoại "B-52 bất khả xâm phạm" ngay trong đêm tập kích đầu tiên của đối phương.',
    heroicStory: 'Tiểu đoàn trưởng Nguyễn Thăng Bình chỉ huy Tiểu đoàn 59 lập công xuất sắc mở màn chiến dịch.',
    highlight: true
  },
  {
    dayNumber: 2,
    date: '19/12/1972',
    headline: 'Bảo Vệ Cửa Ngõ Phía Bắc & Ga Yên Viên',
    summary: 'Mỹ tiếp tục điều động các đợt B-52 đánh phá sân bay Gia Lâm, ga Yên Viên và nhà máy dệt Bát Tràng. Lưới lửa phòng không thủ đô nhiều tầng đánh trả quyết liệt.',
    b52Downed: 2,
    tacticalAction: 'Trung đoàn 257 và 261 phối hợp bảo vệ các đầu mối giao thông huyết mạch.',
  },
  {
    dayNumber: 3,
    date: '20/12/1972',
    headline: 'Đêm Đánh Tiêu Diệt – Bắt Sống Nhiều Giặc Lái',
    summary: 'Đêm tập kích ác liệt nhất trong đợt 1. Chỉ trong vòng 10 phút (từ 5h02 đến 5h11 rạng sáng 21/12), Tiểu đoàn 57 đã xuất sắc bắn rơi 2 chiếc B-52.',
    b52Downed: 7,
    tacticalAction: 'Kỷ lục tiêu diệt 7 chiếc B-52 trong một đêm, bắt sống nhiều viên phi công sừng sỏ.',
    heroicStory: 'Tiểu đoàn 57 (Trung đoàn 261) do Tiểu đoàn trưởng Nguyễn Văn Phiệt chỉ huy đánh những phát đạn chính xác.',
    highlight: true
  },
  {
    dayNumber: 4,
    date: '21/12/1972',
    headline: 'Hà Nội – Hải Phòng Cùng Rực Lửa',
    summary: 'Mỹ mở rộng ném bom ra Hải Phòng và các tuyến đê sông Hồng. Pháo cao xạ và súng máy của tự vệ công nhân tham gia giăng lưới lửa tầm thấp.',
    b52Downed: 3,
    tacticalAction: 'Bắn rơi cả máy bay chiến thuật hiện đại F-111 "cánh cụp cánh xòe" bay thấp.',
  },
  {
    dayNumber: 5,
    date: '22/12/1972',
    headline: 'Bệnh Viện Bạch Mai Bị Tàn Phá – Ý Chí Không Khuất Phục',
    summary: 'Bom rải thảm rơi trúng Bệnh viện Bạch Mai gây thương vong cho nhiều y bác sĩ và bệnh nhân. Càng đau thương, bộ đội tên lửa càng kiên định giữ vững trận địa.',
    b52Downed: 3,
    tacticalAction: 'Quân dân Hà Nội vừa cứu sập, cứu thương vừa tiếp đạn cho các bệ phóng tên lửa.',
  },
  {
    dayNumber: 6,
    date: '23/12/1972',
    headline: 'Đánh Địch Trên Mọi Hướng & Bẻ Gãy Đội Hình',
    summary: 'Địch thay đổi đường bay và tăng cường phát nhiễu tiêu cực dày đặc. Kíp trắc thủ Việt Nam dựa vào "Cẩm nang bìa đỏ" tinh tường vạch nhiễu tìm thù.',
    b52Downed: 2,
    tacticalAction: 'Vượt qua màn nhiễu điện tử hiện đại nhất thế giới của Mỹ lúc bấy giờ.',
  },
  {
    dayNumber: 7,
    date: '24/12/1972',
    headline: 'Tạm Dừng Lễ Noel & Khẩn Trương Nạp Đạn Tên Lửa',
    summary: 'Địch tạm ngừng ném bom 24 giờ nhân dịp Giáng sinh. Quân dân ta tận dụng từng phút giây sửa chữa trận địa, tiếp tế đầu đạn SAM-2 và rút kinh nghiệm tác chiến.',
    b52Downed: 0,
    tacticalAction: 'Các nhà máy cơ khí quốc phòng và đơn vị công binh làm việc thâu đêm chuẩn bị cho trận quyết chiến.',
  },
  {
    dayNumber: 8,
    date: '25/12/1972',
    headline: 'Lệnh Tổng Phản Công Tái Khởi Động',
    summary: 'Bộ Tổng Tư lệnh nhận định địch sẽ dốc toàn lực đánh đòn hiểm độc nhất sau ngày Noel. Mọi đơn vị vào cấp 1 trực chiến 100%.',
    b52Downed: 1,
    tacticalAction: 'Sẵn sàng toàn bộ hỏa lực đón đánh đòn tập kích ồ ạt từ nhiều hướng.',
  },
  {
    dayNumber: 9,
    date: '26/12/1972',
    headline: 'Trận Quyết Chiến Lịch Sử & Nỗi Đau Khâm Thiên',
    summary: 'Mỹ tung 105 lần chiếc B-52 và 110 lần máy bay chiến thuật đánh dồn dập vào Hà Nội, Hải Phòng, Thái Nguyên. Phố Khâm Thiên bị tàn phá nặng nề. Đáp lại, ta bắn rụng 8 chiếc B-52!',
    b52Downed: 8,
    tacticalAction: 'Đêm quyết chiến định đoạt số phận chiến dịch Linebacker II. Ý chí xâm lược của Lầu Năm Góc chính thức gãy vụn.',
    heroicStory: 'Đêm lịch sử khi lưới lửa phòng không Hà Nội tạo nên bức tường thép không thể xuyên thủng.',
    highlight: true
  },
  {
    dayNumber: 10,
    date: '27/12/1972',
    headline: 'Phạm Tuân Trên Tiêm Kích MiG-21 Lập Kỳ Tích',
    summary: '22h20: Phi công Phạm Tuân cất cánh từ Yên Bái, bay luồn qua đội hình tiêm kích bảo vệ F-4 của Mỹ, tiếp cận mục tiêu và phóng 2 quả tên lửa bắn cháy B-52 tại chỗ.',
    b52Downed: 4,
    tacticalAction: 'Chiến công lịch sử đầu tiên của Không quân tiêm kích Việt Nam bắn rơi pháo đài bay B-52 trong đêm.',
    heroicStory: 'Anh hùng LLVTND Phạm Tuân ghi tên vào lịch sử không quân thế giới.',
    highlight: true
  },
  {
    dayNumber: 11,
    date: '28/12/1972',
    headline: 'Vũ Xuân Thiều – Quả Đạn Thứ Ba Bất Tử',
    summary: 'Phi công Vũ Xuân Thiều lái MiG-21 bám sát B-52 địch. Sau khi bắn hết 2 quả tên lửa mà máy bay địch chưa rơi hẳn, anh đã dũng cảm lao thẳng chiếc tiêm kích vào pháo đài bay.',
    b52Downed: 2,
    tacticalAction: 'Biểu tượng sáng ngời của tinh thần quyết tử cho Tổ quốc quyết sinh.',
    heroicStory: 'Anh hùng liệt sĩ phi công Vũ Xuân Thiều xả thân vì vùng trời Tổ quốc.',
    highlight: true
  },
  {
    dayNumber: 12,
    date: '29/12/1972',
    headline: 'Phát Đạn Cuối Cùng – Mỹ Tuyên Bố Đầu Hàng Cuộc Tập Kích',
    summary: '23h16: Chiếc B-52 cuối cùng bị Tiểu đoàn 72 (Trung đoàn 285) bắn rơi tại Định Công (Hà Nội). Sáng 30/12, Tổng thống Nixon buộc phải tuyên bố ngừng hoàn toàn ném bom miền Bắc.',
    b52Downed: 1,
    tacticalAction: 'Chiến thắng trọn vẹn "Hà Nội - Điện Biên Phủ trên không" sau 12 ngày đêm rung chuyển.',
    highlight: true
  }
];

export const AIR_BATTLE_STATS = {
  totalPlanesDowned: 81,
  b52Downed: 34,
  f111Downed: 5,
  tacticalPlanesDowned: 42,
  pilotsCaptured: 44,
  daysDuration: 12,
  bombsDroppedTons: '100.000+',
  totalSortiesB52: 663
};
