function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.protoype.getQuality = function () {
            return (this.processorSpeed += this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.protoype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        classToExtend.protoype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.protoype.isFullSet = function () {
            let manifacturer = this.manifacturer;
            return this.keyboard.manifacturer === manifacturer && this.monitor.manifacturer === manifacturer;
        };
        classToExtend.protoype.isClassy = function () {
            return (this.battery.expectedLife >= 3) && (this.color === 'Silver' || this.color === 'Black') && (this.weight < 3);
        };
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}