"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PendingInterceptorService = (function () {
    function PendingInterceptorService() {
        this._pendingRequests = 0;
        this._pendingRequestsStatus = new rxjs_1.ReplaySubject(1);
        this._filteredUrlPatterns = [];
    }
    Object.defineProperty(PendingInterceptorService.prototype, "pendingRequestsStatus", {
        get: function () {
            return this._pendingRequestsStatus.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingInterceptorService.prototype, "pendingRequests", {
        get: function () {
            return this._pendingRequests;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingInterceptorService.prototype, "filteredUrlPatterns", {
        get: function () {
            return this._filteredUrlPatterns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingInterceptorService.prototype, "forceByPass", {
        set: function (value) {
            this._forceByPass = value;
        },
        enumerable: true,
        configurable: true
    });
    PendingInterceptorService.prototype.shouldBypassUrl = function (url) {
        return this._filteredUrlPatterns.some(function (e) {
            return e.test(url);
        });
    };
    PendingInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var shouldBypass = this.shouldBypassUrl(req.urlWithParams) || this._forceByPass;
        if (!shouldBypass) {
            this._pendingRequests++;
            if (1 === this._pendingRequests) {
                this._pendingRequestsStatus.next(true);
            }
        }
        return next.handle(req).pipe(operators_1.map(function (event) {
            return event;
        }), operators_1.catchError(function (error) {
            return rxjs_1.throwError(error);
        }), operators_1.finalize(function () {
            if (!shouldBypass) {
                _this._pendingRequests--;
                if (0 === _this._pendingRequests) {
                    _this._pendingRequestsStatus.next(false);
                }
            }
        }));
    };
    PendingInterceptorService.decorators = [
        { type: core_1.Injectable },
    ];
    return PendingInterceptorService;
}());
exports.PendingInterceptorService = PendingInterceptorService;
function PendingInterceptorServiceFactory() {
    return new PendingInterceptorService();
}
exports.PendingInterceptorServiceFactory = PendingInterceptorServiceFactory;
exports.PendingInterceptorServiceFactoryProvider = {
    provide: PendingInterceptorService,
    useFactory: PendingInterceptorServiceFactory
};
//# sourceMappingURL=pending-interceptor.service.js.map