import { expect } from "chai";
import sinon from "sinon";
import TgBot from "../telegram-bot";
import { User } from "../db";
import { Content, DialogKey, HourFormat, IdempotencyKeys, Lang } from "../constants";
import { _sendDelayedToInactiveUsers, _sendDelayedToSmokers } from "./smokingTimeTest";

describe("smokingTimeTest", () => {
  let clock: sinon.SinonFakeTimers;
  let user: User;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    user = {
      chatId: 33333,
      username: "unit-test-user",
      lang: Lang.EN,
      hourFormat: HourFormat.H24,
      timezone: "0",
      minDeltaTimesInitial: [],
      minDeltaTime: 20,
      deltaTime: 21,
      lastTime: 0,
      nextTime: 0,
      ignoreTime: 0,
      difficulty: 0,
      penalty: 0,
      penaltyAll: 0,
      penaltyDays: 0,
      winstrike: 0,
      motivizerIndex: 0,
      youCanIndex: 0,
      cigarettesInDay: 0,
      cigarettesSummary: 0,
      startDate: new Date(),
      idempotencyKey: IdempotencyKeys.One,
    };
  });

  afterEach(() => {
    clock.restore();
    sinon.restore();
  });

  describe("sendDelayedToSmokers", () => {
    let botMock: sinon.SinonStubbedInstance<TgBot>;

    beforeEach(() => {
      botMock = sinon.createStubInstance(TgBot);
    });

    it("should not send message when users array is empty", () => {
      const users: User[] = [];
      _sendDelayedToSmokers(botMock, users);
      expect(botMock.sendToUser.called).to.be.false;
    });

    it("should send message to single user", () => {
      const users = [user];
      _sendDelayedToSmokers(botMock, users);
      expect(botMock.sendToUser.calledOnce).to.be.true;
      expect(botMock.sendToUser.calledWith(user, Content.TIME_FOR_A_SMOKE)).to.be.true;
    });
  });

  describe("sendDelayedToInactiveUsers", () => {
    let botMock: {
      sendToUser: sinon.SinonStub;
    };

    beforeEach(() => {
      botMock = {
        sendToUser: sinon.stub(),
      };
    });

    it("should not send message when users array is empty", () => {
      const users: User[] = [];
      _sendDelayedToInactiveUsers(botMock as unknown as TgBot, users);
      sinon.assert.notCalled(botMock.sendToUser);
    });

    it("should send ignore message to single user", () => {
      const users = [user];

      _sendDelayedToInactiveUsers(botMock as unknown as TgBot, users);

      sinon.assert.calledOnce(botMock.sendToUser);
      sinon.assert.calledWith(botMock.sendToUser, user, Content.BOT_IGNORE, sinon.match.object, DialogKey.ignore);
    });

    it("should stop sending messages when all users are processed", () => {
      const users: User[] = [user];
      _sendDelayedToInactiveUsers(botMock as unknown as TgBot, users);
      clock.tick(20); // Advance more than one interval
      sinon.assert.calledOnce(botMock.sendToUser);
    });
  });
});
