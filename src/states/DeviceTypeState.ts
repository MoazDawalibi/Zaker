import { create } from 'zustand';



interface ModalState {
  DeviceType: string;
  setDeviceType: (value: string) => void;
}
export const useDetectDeviceType = create<ModalState>((set) => ({
  DeviceType: "",
  setDeviceType: (value: string) => set(() => ({ DeviceType: value })),
}));

