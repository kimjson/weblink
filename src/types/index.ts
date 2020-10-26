export interface Item {
  title: string;
  content?: string;
  priority: 'high' | 'mid' | 'low';
  updatedAt: number; // 생성 시각 또는 마지막 수정 시각 
}