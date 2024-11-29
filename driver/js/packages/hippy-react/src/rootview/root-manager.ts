import { EventBus } from '../event';

type RootContainer = any;

const EVENT_PAUSE_INSTANCE = '@hippy:pauseInstance';
const EVENT_RESUME_INSTANCE = '@hippy:resumeInstance';

export class RootManager {
  private static instance: RootManager;

  public static getInstance(): RootManager {
    if (!RootManager.instance) {
      RootManager.instance = new RootManager();
    }
    return RootManager.instance;
  }

  public activeRootViewIds: number[] = [];
  public rootViewMap = new Map<number, RootContainer>();

  private constructor() {
    EventBus.on(EVENT_PAUSE_INSTANCE, (rootIds: number[]) => {
      const activeRootViewIds = this.getActiveRootViewIds();
      this.setActiveRootViewIds(activeRootViewIds.filter(id => !rootIds.includes(id)));
    });

    EventBus.on(EVENT_RESUME_INSTANCE, (rootIds: number[]) => {
      let activeRootViewIds = this.getActiveRootViewIds();
      rootIds.forEach((id) => {
        if (activeRootViewIds.includes(id)) {
          activeRootViewIds = activeRootViewIds.filter(item => item !== id);
        }
        activeRootViewIds.unshift(id);
      });
      this.setActiveRootViewIds(activeRootViewIds);
    });
  }

  setRootContainer(rootId: number, root: RootContainer) {
    if (this.activeRootViewIds.includes(rootId)) {
      this.activeRootViewIds = this.activeRootViewIds.filter(item => item !== rootId);
    }
    this.activeRootViewIds.unshift(rootId);
    this.rootViewMap.set(rootId, root);
  }

  getActiveRootViewIds(): number[] {
    return this.activeRootViewIds;
  }

  setActiveRootViewIds(rootViewIds: number[]) {
    this.activeRootViewIds = rootViewIds;
  }

  getRootContainer(rootViewId: number): RootContainer | undefined {
    return this.rootViewMap.get(rootViewId);
  }

  getRootViewId(): number {
    if (this.activeRootViewIds.length === 0) {
      throw new Error('getRootViewId must execute after setRootContainer');
    }
    return this.activeRootViewIds[0];
  }
}
