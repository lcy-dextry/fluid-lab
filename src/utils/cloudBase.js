import cloudbase from '@cloudbase/js-sdk';
import tcb from '@cloudbase/js-sdk';
import { env } from '@/common/local';


export const appTcb = tcb.init({
    env,
});
export const app = cloudbase.init({
    env,
});
export const auth = app.auth({
    persistence: 'local',
});
export const db = app.database();
export const _ = db.command;
