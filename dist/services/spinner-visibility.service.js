"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var pending_interceptor_service_1 = require("./pending-interceptor.service");
var SpinnerVisibilityService = (function () {
    function SpinnerVisibilityService(pendingInterceptorService) {
        this.pendingInterceptorService = pendingInterceptorService;
        this._visibilitySubject = new rxjs_1.ReplaySubject(1);
    }
    Object.defineProperty(SpinnerVisibilityService.prototype, "visibilityObservable", {
        get: function () {
            return this._visibilitySubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SpinnerVisibilityService.prototype.show = function () {
        this.pendingInterceptorService.forceByPass = true;
        this._visibilitySubject.next(true);
    };
    SpinnerVisibilityService.prototype.hide = function () {
        this._visibilitySubject.next(false);
        this.pendingInterceptorService.forceByPass = false;
    };
    SpinnerVisibilityService.decorators = [
        { type: core_1.Injectable },
    ];
    SpinnerVisibilityService.ctorParameters = function () { return [
        { type: pending_interceptor_service_1.PendingInterceptorService, },
    ]; };
    return SpinnerVisibilityService;
}());
exports.SpinnerVisibilityService = SpinnerVisibilityService;
function SpinnerVisibilityServiceFactory(pendingInterceptorService) {
    return new SpinnerVisibilityService(pendingInterceptorService);
}
exports.SpinnerVisibilityServiceFactory = SpinnerVisibilityServiceFactory;
exports.SpinnerVisibilityServiceFactoryProvider = {
    provide: SpinnerVisibilityService,
    useFactory: SpinnerVisibilityServiceFactory,
    deps: [pending_interceptor_service_1.PendingInterceptorService]
};
//# sourceMappingURL=spinner-visibility.service.js.map